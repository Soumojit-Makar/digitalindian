const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// ─── Send Enquiry Admin Notification ─────────────────────────────────────────
const sendEnquiryToAdmin = async (enquiry, aiInsights) => {
  const transporter = createTransporter();
  const priorityColor = { hot: '#ef4444', warm: '#f97316', cold: '#64748b' };
  const priority = aiInsights?.priority || 'warm';

  await transporter.sendMail({
    from: `"Digital Indian Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `🔔 New Enquiry: ${enquiry.subject} [${priority.toUpperCase()}]`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
        <div style="background: #0f172a; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #38bdf8; margin: 0; font-size: 20px;">Digital Indian — New Enquiry</h1>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 20px;">
            <span style="background: ${priorityColor[priority]}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${priority.toUpperCase()} LEAD</span>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #64748b; width: 140px;">Name</td><td style="padding: 8px; font-weight: 600;">${enquiry.name}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; color: #64748b;">Email</td><td style="padding: 8px;"><a href="mailto:${enquiry.email}">${enquiry.email}</a></td></tr>
            <tr><td style="padding: 8px; color: #64748b;">Phone</td><td style="padding: 8px;">${enquiry.phone || '—'}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; color: #64748b;">Company</td><td style="padding: 8px;">${enquiry.company || '—'}</td></tr>
            <tr><td style="padding: 8px; color: #64748b;">Subject</td><td style="padding: 8px; font-weight: 600;">${enquiry.subject}</td></tr>
            <tr style="background: #f8fafc;"><td style="padding: 8px; color: #64748b;">Service Interest</td><td style="padding: 8px;">${enquiry.serviceInterest || '—'}</td></tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f1f5f9; border-radius: 6px;">
            <p style="margin: 0 0 8px; color: #475569; font-size: 13px; font-weight: 600;">MESSAGE</p>
            <p style="margin: 0; color: #1e293b;">${enquiry.message}</p>
          </div>

          ${aiInsights ? `
          <div style="margin-top: 20px; padding: 16px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px;">
            <p style="margin: 0 0 12px; color: #1d4ed8; font-size: 13px; font-weight: 700;">🤖 AI INSIGHTS</p>
            <p style="margin: 0 0 6px; color: #374151;"><strong>Intent:</strong> ${aiInsights.intent}</p>
            <p style="margin: 0 0 6px; color: #374151;"><strong>Recommended Service:</strong> ${aiInsights.recommendedService}</p>
            <p style="margin: 0 0 6px; color: #374151;"><strong>Summary:</strong> ${aiInsights.summary}</p>
          </div>
          ` : ''}
        </div>
      </div>
    `
  });
};

// ─── Send Enquiry Acknowledgement to Customer ─────────────────────────────────
const sendEnquiryAcknowledgement = async (enquiry, suggestedReply) => {
  const transporter = createTransporter();

  const replyText = suggestedReply || `Thank you for reaching out to Digital Indian. We have received your enquiry regarding "${enquiry.subject}" and our team will get back to you within 1–2 business days.`;

  await transporter.sendMail({
    from: `"Digital Indian" <${process.env.EMAIL_USER}>`,
    to: enquiry.email,
    subject: `We've received your enquiry — Digital Indian`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0f172a, #0c4a6e); padding: 32px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 700;">Digital Indian</h1>
          <p style="color: #7dd3fc; margin: 8px 0 0;">GIS & Geospatial Intelligence</p>
        </div>
        <div style="background: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          <p style="color: #1e293b; font-size: 16px;">Dear <strong>${enquiry.name}</strong>,</p>
          <p style="color: #475569; line-height: 1.6;">${replyText}</p>
          <p style="color: #475569; line-height: 1.6;">Our GIS experts will review your requirements and provide you with tailored solutions that meet your organizational goals.</p>
          
          <div style="margin: 24px 0; padding: 16px; background: #f0f9ff; border-left: 4px solid #0284c7; border-radius: 4px;">
            <p style="margin: 0; color: #0c4a6e; font-weight: 600;">📍 Digital Indian</p>
            <p style="margin: 4px 0 0; color: #0369a1;">Kolkata, West Bengal, India</p>
            <p style="margin: 4px 0 0; color: #0369a1;">info@digitalindian.in | +91 33 4001 XXXX</p>
          </div>

          <p style="color: #94a3b8; font-size: 13px;">This is an automated acknowledgement. Please do not reply to this email directly.</p>
        </div>
      </div>
    `
  });
};

// ─── Send Job Application Notifications ──────────────────────────────────────
const sendApplicationToAdmin = async (application, jobTitle) => {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Digital Indian Careers" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `📝 New Application: ${jobTitle} — ${application.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0f172a;">New Job Application</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Applicant:</strong> ${application.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${application.email}">${application.email}</a></p>
        <p><strong>Phone:</strong> ${application.phone || '—'}</p>
        <p><strong>Resume:</strong> <a href="${application.resumeUrl}" target="_blank">Download Resume</a></p>
        ${application.coverLetter ? `<p><strong>Cover Letter:</strong><br>${application.coverLetter}</p>` : ''}
      </div>
    `
  });
};

const sendApplicationAcknowledgement = async (application, jobTitle) => {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `"Digital Indian Careers" <${process.env.EMAIL_USER}>`,
    to: application.email,
    subject: `Application received — ${jobTitle} at Digital Indian`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #0f172a;">Application Received!</h2>
        <p>Dear <strong>${application.name}</strong>,</p>
        <p>Thank you for applying for the <strong>${jobTitle}</strong> position at Digital Indian.</p>
        <p>Our HR team will review your application and reach out to you if your profile matches our requirements.</p>
        <p>We appreciate your interest in joining our geospatial technology team.</p>
        <p>Warm regards,<br><strong>Digital Indian HR Team</strong></p>
      </div>
    `
  });
};

module.exports = {
  sendEnquiryToAdmin,
  sendEnquiryAcknowledgement,
  sendApplicationToAdmin,
  sendApplicationAcknowledgement
};

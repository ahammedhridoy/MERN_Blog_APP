const nodemailer = require("nodemailer");
const contact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    // Create Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASSWORD,
      },
    });

    // Send email with password reset link
    await transporter.sendMail({
      from: process.env.SMTP_AUTH_USER,
      to: "developerhridoy@gmail.com",
      subject: `Want to contact from (Blogify)`,
      priority: "high",
      html: `
        <div style="width: 100%; height: auto; padding: 15px 10px; text-align: center;">
        <h1 style="text-align: center; color: #000;">Contact Form</h1>
        <p style="text-align: center; color: #000;">Name: ${name}</p>
        <p style="text-align: center; color: #000;">Email: ${email}</p>
        <p style="text-align: center; color: #000;">Subject: ${subject}</p>
        <p style="text-align: center; color: #000;">Message: ${message}</p>
      <div>
      `,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { contact };

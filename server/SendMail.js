const nodemailer = require("nodemailer");

// settings email
const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: process.env.SEND_SERVICE, // google provider
    host: process.env.SEND_HOST, // host provider
    port: process.env.SEND_PORT, // port provider
    secure: true,
    auth: {
      user: process.env.SEND_USER, // email user
      pass: process.env.SEND_PASSWORD, // password user
    },
    tls: {
      rejectUnauthorized: false
    },
  });
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log('Send Mail Error:', err);
      return;
    }
  });
};

// send email
const EmailSender = ({ firstName, lastName, email, phone, message }) => {
  const options = {
    from: {
      name: 'ShopPay 🥾',
      address: process.env.SEND_USER,
    },
    to: process.env.SEND_TO_MAIL,
    subject: "Message From ShopPay",
    html: `
    <div style="width: 100%; display: flex; align-items: center; justify-content: center; background-color: #f2f2f2; padding: 5rem 0.75rem;">
    <div style="margin: 0 auto; background-color: #ffffff; border-radius: 0.375rem; width: 100%; max-width: 42rem; overflow: hidden; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'">
      <div style="padding: 2rem 1rem; background-color: #592ff4">
        <h2 style="font-size: 1.875rem; text-align: center; line-height: 2.25rem; color: #ffffff; font-weight: 600;">Welcome to ShopPay</h2>
      </div>
      <h1 style="padding: 1.75rem 0; margin: 0; color: #44403c; font-weight: 600; font-size: 1.125rem; line-height: 1.75rem; text-align: center;">Completed user form: <span style="font-weight: 600;">${firstName} ${lastName}</span></h1>
      <hr style="background-color:#d4d4d4; margin: 0 1rem;" />
      <table style="border-collapse: collapse; margin: 1rem 0 1.75rem 0;">
        <tbody>
          <tr style="max-width: 100%;">
            <td style="padding: 0.25rem 1rem; color: #44403c; font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; white-space: nowrap; vertical-align: top;">
              First name:
            </td>
            <td
              style="color: #78716c; margin: 0 0 0 0.5rem; font-size: 1.125rem; line-height: 1.75rem; word-break: break-word; padding: 0 1rem 0 0;"
            >
              ${firstName}
            </td>
          </tr>
          <tr style="max-width: 100%;">
            <td style="padding: 0.25rem 1rem; color: #44403c; font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; white-space: nowrap; vertical-align: top;">
              Last name:
            </td>
            <td
              style="color: #78716c; margin: 0 0 0 0.5rem; font-size: 1.125rem; line-height: 1.75rem; word-break: break-word; padding: 0 1rem 0 0;"
            >
              ${lastName}
            </td>
          </tr>
          <tr style=" max-width: 100%;">
            <td style="padding: 0.25rem 1rem; color: #44403c; font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; white-space: nowrap; vertical-align: top;">
              Email:
            </td>
            <td
              style="color: #78716c; margin: 0 0 0 0.5rem; font-size: 1.125rem; line-height: 1.75rem; word-break: break-word; padding: 0 1rem 0 0;"
            >
              ${email}
            </td>
          </tr>
          <tr style="max-width: 100%;">
            <td style="padding: 0.25rem 1rem; color: #44403c; font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; white-space: nowrap; vertical-align: top;">
              Phone number:
            </td>
            <td
              style="color: #78716c; margin: 0 0 0 0.5rem; font-size: 1.125rem; line-height: 1.75rem; word-break: break-word; padding: 0 1rem 0 0;"
            >
              +${phone}
            </td>
          </tr>
          <tr style="max-width: 100%;">
            <td style="padding: 0.25rem 1rem; color: #44403c; font-size: 1.125rem; line-height: 1.75rem; font-weight: 600; white-space: nowrap; vertical-align: top;">Message:</td>
            <td
              style="color: #78716c; margin: 0 0 0 0.5rem; font-size: 1.125rem; line-height: 1.75rem; word-break: break-word; padding: 0 1rem 0 0;"
            >
              ${message}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    `
  };

  Email(options);
};

module.exports = EmailSender
import { transporter, mailOptions } from "../../app/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
  }
  try {
    await transporter.sendMail({
      from: "maurolobo.ml@gmail.com",
      to: "maurolobo.ml@gmail.com",
      // subject: data.subject,
      text: "This is a test string",
      html: "<h1>Test </h1>",
    });
    return res.status(200).json({ success: "true" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "babadddd" });
  }
};

export default handler;

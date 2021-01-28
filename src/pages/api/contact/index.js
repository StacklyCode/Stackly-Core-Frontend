import nodemailer from "nodemailer";

const emailPass = "Stacklycode77.";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "Stacklycode@gmail.com",
    pass: emailPass,
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message, subject } = req.body;

    if (email === "" || name === "" || message === "" || subject === "") {
      res.status(403).send("");
      return;
    }

    await mailer({
      email,
      name,
      message,
      subject,
    });
    res.status(200).send("Message send correctly");
  } else {
    res.status(400).send("Api not method POST");
    return;
  }
};

const mailer = ({ email, name, message, subject }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const messageSend = {
    from,
    to: "stacklycode@gmail.com",
    subject: `${subject} : Mensaje de ${from} `,
    message,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(messageSend, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

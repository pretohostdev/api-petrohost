const nodemailer=require("nodemailer")
const transporter = nodemailer.createTransport({
    host: 'smtp.mailhostbox.com',
    port: 465,
    secure: true,
    tls:true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });


const options = {
    from: 'projectos@dev.petrohost.ao',
    to: 'francisco.pedro@petrohost.ao',
    subject: 'hello world',
    html: "<p>Ola teste</p>",
  };

const EnviarEmail=async()=>{

    await transporter.sendMail(options)
    .then((resultado)=>{
      console.log('email enviado',resultado)
    })
    .catch((error)=>{
      console.log("error ao enviar email",error)
    })
}

module.exports=EnviarEmail
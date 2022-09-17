const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
host: "smtp.gmail.com",
port: 587,
secure: false,
auth: {
    user: "applecare3ssup0rt@gmail.com",
    pass: "Raul994408779"
     }
});

transporter.sendMail({
    from: "Apple Care <applecare3ssup0rt@gmail.com>",
    to: "raulcavalcanti2008usa@gmail.com",
    subject: "teste",
    Text: "refwiefjwfojo",
    html: "ola meu <a href='https://registration312.herokuapp.com'>nodemailer/a> gnfjdsng"
}).then(message => {
console.log(message);
}).catch(err => {
console.log(err);
})

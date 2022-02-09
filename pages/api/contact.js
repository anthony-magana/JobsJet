export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
        user: 'dumby1028@gmail.com',
        pass: process.env.PASSWORD,
        },
        secure: true,
    })
    const mailData = {
        from: 'dumby1028@gmail.com',
        to: 'anthonymagana0705@gmail.com',
        subject: `Message from ${req.body.name} | ${req.body.subject}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err){
            console.log(err)
            return res.status(500).send(err)
        }
        else{
            console.log(info)
            return res.status(200).send(200)
        }
    })
}
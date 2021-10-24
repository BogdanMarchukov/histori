const nodemailer = require('nodemailer')

class MailHandler {
    constructor(
        public userEmail: string,
        public link: string,
        public transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    ) {
    }

    async sendMail() { // отправка ссылки для активации пользователю
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: this.userEmail,
            subject: `Активация Акаунта на ${process.env.API_URL}`,
            text: '',
            html:
                `
                <div>
                    <h1>для активации перейдите по ссылке</h1>
                    <a href="${this.link}">${this.link}</a>
                </div>
            `
        })
    }
}

export {MailHandler}
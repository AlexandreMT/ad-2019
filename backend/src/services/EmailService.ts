import { SendMailOptions } from 'nodemailer'
import { transporter } from '../config/mail'


class EmailService {
  public async sendEmail(toName: string, toEmail: string, randomFriendName: string): Promise<void> {
    const mailOptions: SendMailOptions = {
      from: 'alexandrematosdev@gmail.com',
      to: toEmail,
      subject: 'Sorteio do amigo secreto',
      html: `
        <h1>Olá, ${toName}.</h1>

        <p>Seu amigo secreto é: ${randomFriendName}</p>
      `
    }

    await transporter.sendMail(mailOptions)
  }
}

export default new EmailService()

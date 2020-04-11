import nodemailer from 'nodemailer'
import { mailUser, mailPass } from './enviroments/env';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: mailUser,
      pass: mailPass
    }
 });

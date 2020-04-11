import dotenv from 'dotenv'

const path = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev'

dotenv.config({ path })

export const port = process.env.NODE_ENV === 'production' ? process.env.PORT : process.env.PORT || 5000

export const databaseURL = process.env.DATABASE_URL || ''

export const mailUser = process.env.MAIL_USER || ''
export const mailPass = process.env.MAIL_PASS || ''

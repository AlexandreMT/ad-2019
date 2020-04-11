import { Schema, model, Document } from 'mongoose'
import validator from 'validator'

export interface UserInterface extends Document {
  name: string,
  email: string,
  friend: string,
  createdAt?: Date,
  updatedAt?: Date
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'O nome é obrigatório.'],
    minlength: [3, 'O nome deve ter no mínimo 3 caracteres.']
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'O e-mail é obrigatório.'],
    validate: {
      validator: (value: string): boolean => {
        return validator.isEmail(value)
      },
      msg: 'Formato de e-mail inválido.'
    },
    unique: [true, 'E-mail já cadastrado.']
  },
  friend: {
    type: String,
    minlength: [3, 'O nome do amigo deve ter no mínimo 3 caracteres.']
  }
}, { timestamps: true })

export const User = model<UserInterface>('User', UserSchema)

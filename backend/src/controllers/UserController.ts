import { Request, Response } from 'express'
import UserService from '../services/UserService'
import { User } from '../models/User'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find()
      
      return res.json(users)
    } catch (error) {
      return res.json({ message: 'Erro ao buscar usuários.' })
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body

    try {
      const user = await UserService.findOrCreateUser(name, email)

      return res.json(user)
    } catch (error) {
      return res.json({ message: 'Erro ao cadastrar usuário.' })
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params
    const { name, email } = req.body

    try {
      const user = await UserService.findOneAndUpdate(userId, name, email)

      if (!user) return res.json({ message: 'Usuário não encontrado.' })

      return res.json(user)
    } catch (error) {
      return res.json({ message: 'Erro ao atualizar usuário. E-mail já cadastrado.' })
    }
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params

    try {
      const message = await UserService.destroy(userId)

      return res.json({ message })
    } catch (error) {
      return res.json({ message: 'Erro ao deletar usuário.' })
    }
  }
}

export default new UserController()

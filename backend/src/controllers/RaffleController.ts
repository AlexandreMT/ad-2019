import { Request, Response } from 'express'
import { User } from '../models/User'
import RaffleService from '../services/RaffleService'

class RaffleController {
  public async raffle(req: Request, res: Response): Promise<Response> {
    const users = await User.find({});

    if (users.length < 3)
      return res.json({ message: 'O mínimo de participantes é de 3 pessoas.' })

    await RaffleService.raffle(users)

    return res.json({ message: 'Usuários sorteados e enviados por e-mail.' })
  }
}

export default new RaffleController()

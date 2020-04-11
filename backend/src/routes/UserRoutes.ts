import { Router } from 'express'
import UserController from '../controllers/UserController'
import RaffleController from '../controllers/RaffleController'

const UserRoutes = Router()

UserRoutes.get('/users', UserController.index)
UserRoutes.post('/users', UserController.store)
UserRoutes.put('/users/:userId', UserController.update)
UserRoutes.delete('/users/:userId', UserController.destroy)

UserRoutes.post('/users/raffle', RaffleController.raffle)

export default UserRoutes

import { User, UserInterface } from '../models/User'

class UserService {
  public findOrCreateUser = async (name: string, email: string): Promise<UserInterface> => {
    try {
      const user = await User.findOne({ email })

      if (user) return user
    } catch (error) {
      throw new Error(error)
    }

    try {
      const user = await User.create({ name, email })

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public findOneAndUpdate = async (id: string, name: string, email: string): Promise<UserInterface | boolean> => {
    try {
      const user = await User.findById(id)

      if (!user) return false

      user.set('name', name)
      user.set('email', email)

      await user.save()

      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  public destroy = async (id: string): Promise<string> => {
    const user = await User.findById(id)

    if (!user) return 'Usuário não existe.'

    try {
      await user.remove()

      return 'Usuário removido.'
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new UserService()

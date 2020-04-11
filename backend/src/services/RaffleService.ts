import { UserInterface } from '../models/User'
import EmailService from './EmailService'

class RaffleService {
  public raffle = async (friends: UserInterface[]): Promise<void> => {  
    const friendsShuffled = this.shuffle(friends.map((friend) => friend))
    const raffleOk = this.raffleIsOk(friends, friendsShuffled)
  
    if (!raffleOk) return this.raffle(friends)
  
    Promise.all(friends.map(async (friend, index) => {
      friend.friend = friendsShuffled[index].name
      await friend.save()
      await EmailService.sendEmail(friend.name, friend.email, friendsShuffled[index].name)
    }))
  }

  private shuffle = (friends: UserInterface[]): UserInterface[] => {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = friends[i]
      friends[i] = friends[j]
      friends[j] = temp
    }
  
    return friends
  }

  private raffleIsOk = (friends: UserInterface[], friendsShuffled: UserInterface[]): boolean => {
    let counter = 0

    for (let i = 0; i <= friends.length - 1; i++) {
      if (friends[i].name === friendsShuffled[i].name) counter++
    }

    return counter === 0
  }
}

export default new RaffleService()

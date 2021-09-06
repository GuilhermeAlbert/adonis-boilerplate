import User from 'App/Models/User'
import { AuthInterface } from 'Contracts/interfaces/services/auth.interface'
import { BaseRepository } from './BaseRepository'

export class AuthRepository extends BaseRepository implements AuthInterface {
  /**
   * @var User
   */
  protected model: User

  constructor(model: User) {
    super(model)
    this.model = model
  }
}

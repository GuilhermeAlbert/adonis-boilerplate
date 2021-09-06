import AuthRepositoryInterface from 'Contracts/interfaces/repositories/auth.repository.interface'
import { AuthInterface } from 'Contracts/interfaces/services/auth.interface'
import { BaseService } from './BaseService'

export class AuthService extends BaseService implements AuthInterface {
  /**
   * @var AuthRepositoryInterface
   */
  protected repository: AuthRepositoryInterface

  constructor(repository: AuthRepositoryInterface) {
    super(repository)
    this.repository = repository
  }
}

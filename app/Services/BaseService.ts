import { LucidProviderModel } from '@ioc:Adonis/Addons/Auth'
import BaseRepositoryInterface from 'Contracts/interfaces/repositories/base.repository.interface'
import BaseInterface from 'Contracts/interfaces/services/base.interface'

export abstract class BaseService implements BaseInterface {
  /**
   * @var BaseRepositoryInterface
   */
  protected repository: BaseRepositoryInterface

  constructor(repository: BaseRepositoryInterface) {
    this.repository = repository
  }

  public all(): Array<LucidProviderModel> {
    return this.repository.all()
  }
}

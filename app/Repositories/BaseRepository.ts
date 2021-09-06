import { LucidProviderModel } from '@ioc:Adonis/Addons/Auth'
import BaseInterface from 'Contracts/interfaces/repositories/base.repository.interface'

export abstract class BaseRepository implements BaseInterface {
  /**
   * @var Model
   */
  protected model: LucidProviderModel

  constructor(model: LucidProviderModel) {
    this.model = model
  }

  public all(): Array<LucidProviderModel> {
    return this.model.all()
  }
}

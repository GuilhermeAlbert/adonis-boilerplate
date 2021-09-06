import { LucidProviderModel } from '@ioc:Adonis/Addons/Auth'

export default interface BaseRepositoryInterface {
  all(): Array<LucidProviderModel>
}

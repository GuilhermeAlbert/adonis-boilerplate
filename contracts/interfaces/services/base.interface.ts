import { LucidProviderModel } from '@ioc:Adonis/Addons/Auth'

export default interface BaseInterface {
  all(): Array<LucidProviderModel>
}

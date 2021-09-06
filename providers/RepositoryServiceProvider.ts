import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { AuthService } from 'App/Services/AuthService'

export default class RepositoryServiceProvider {
  public static needsApplication = true

  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.bind('@ioc:AdonisBoilerplate/AuthService', () => AuthService)
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}

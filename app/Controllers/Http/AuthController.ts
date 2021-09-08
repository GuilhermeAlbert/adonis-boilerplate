import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpConstants from 'App/Constants/HttpConstants'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'

export default class AuthController {
  /**
   * @returns {Promise<User>}
   */
  public async register({ request, response }: HttpContextContract): Promise<any> {
    await request.validate(RegisterValidator)

    const { email, password } = request.only(['email', 'password'])

    response.status(HttpConstants.CREATED)
    return User.create({ email, password })
  }

  /**
   * @returns {Promise<User>}
   */
  public async login({ auth, request }: HttpContextContract): Promise<User> {
    const { email, password } = request.only(['email', 'password'])

    return await auth.attempt(email, password)
  }

  /**
   * @returns {Promise<void>}
   */
  public async logout({ auth }: HttpContextContract): Promise<void> {
    await auth.logout()
  }

  /**
   * @returns {Promise<User | undefined>}
   */
  public async authenticated({ auth }: HttpContextContract): Promise<User | undefined> {
    const user: User | undefined = auth.user

    return user
  }
}

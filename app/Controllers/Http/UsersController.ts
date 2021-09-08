import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HTTPConstants from 'App/Constants/HttpConstants'
import User from 'App/Models/User'

export default class UsersController {
  /**
   * @returns {Promise<Array<User>>}
   */
  public async index({}: HttpContextContract): Promise<Array<User>> {
    return await User.all()
  }

  /**
   * @returns {Promise<User | undefined>}
   */
  public async show({ params }: HttpContextContract): Promise<User | undefined> {
    return await User.findOrFail(params.id)
  }

  /**
   * @returns {Promise<User>}
   */
  public async store({ request, response }: HttpContextContract): Promise<User> {
    const { email, password } = request.only(['email', 'password'])
    const user: Promise<User> = User.create({ email, password })

    response.status(HTTPConstants.CREATED)
    return user
  }

  /**
   * @returns {Promise<User>}
   */
  public async update({ params, request }: HttpContextContract): Promise<any> {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findOrFail(params.id)

    user.email = email
    user.password = password

    return await user.save()
  }

  /**
   * @returns {Promise<any>}
   */
  public async destroy({ params, response }: HttpContextContract): Promise<any> {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return response.status(HTTPConstants.NO_CONTENT)
  }
}

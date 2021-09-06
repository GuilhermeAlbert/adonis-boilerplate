import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'

export default class AuthController {
  public async register({ request, response }: HttpContextContract): Promise<any> {
    await request.validate(RegisterValidator)
  }

  public async authenticated({ auth, response }: HttpContextContract) {
    //
  }
}

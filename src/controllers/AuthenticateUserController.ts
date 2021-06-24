import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle(req: Request, res: Response) {

    const { email, password } = req.body;

    const authUserService = new AuthenticateUserService();

    const token = await authUserService.execute({ email, password })

    return res.json(token)

  }
}

export { AuthenticateUserController }
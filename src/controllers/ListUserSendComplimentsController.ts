import { Request, Response } from 'express'
import { ListUserSendComplimentsService } from '../services/ListUserSendComplimentsService'

class ListUserSendComplimentsController {

  async handle(req: Request, res: Response) {

    const { user_id } = req;

    const sendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await sendComplimentsService.execute(user_id);

    return res.json(compliments)

  }

}

export { ListUserSendComplimentsController }
import { Request, Response, NextFunction, request } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuth(req: Request, res: Response, next: NextFunction) {

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "6af2501dbb6c6fecca35eb466d1517ae") as IPayload

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }

}
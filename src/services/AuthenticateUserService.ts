import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from 'jsonwebtoken'

interface IAuthRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    const user = await usersRepository.findOne({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error('Email/Password is incorrect.')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error('Email/Password is incorrect.')
    }

    const token = sign({
      email: user.email,
    }, "6af2501dbb6c6fecca35eb466d1517ae", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token;

  }
}

export { AuthenticateUserService }
import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class CreateTagService {
  async execute(name: string) {
    const tagRepository = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new Error("Tag name is invalid.")
    }

    const tagNameCheck = await tagRepository.findOne({
      where: {
        name
      }
    })

    if (tagNameCheck) {
      throw new Error("Tag already exists.")
    }

    const tag = tagRepository.create({
      name
    })

    await tagRepository.save(tag);

    return tag;

  }
}

export { CreateTagService }
import {Resume} from '../mongo/models'
import isTokenValid from '../validate'

const createResume = async (root, {input}, context) => {
  const {token} = context

  const {error} = await isTokenValid(token)

  if (error) {
    throw new Error(error)
  }

  const resume = new Resume({
    name: input.name,
    description: input.description,
  })

  await resume.save()
  
  return resume
}

export {createResume as default}
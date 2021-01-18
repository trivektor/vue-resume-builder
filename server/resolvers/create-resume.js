import {Resume} from '../mongo/models'

const createResume = async (root, {input}, {userId}) => {
  const resume = new Resume({
    name: input.name,
    description: input.description,
    user_id: userId,
  })

  await resume.save()
  
  return resume
}

export {createResume as default}
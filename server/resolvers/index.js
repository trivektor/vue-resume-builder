import createResume from './create-resume'
import deleteResume from './delete-resume'
import resumes from './resumes'

const resolvers = {
  Query: {
    resumes,
  },
  Mutation: {
    createResume,
    deleteResume,
  },
}

export {resolvers as default}


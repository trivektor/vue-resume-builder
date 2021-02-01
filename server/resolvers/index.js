import createResume from './create-resume'
import deleteResume from './delete-resume'
import resumes from './resumes'
import resume from './resume'

const resolvers = {
  Query: {
    resumes,
    resume,
  },
  Mutation: {
    createResume,
    deleteResume,
  },
}

export {resolvers as default}


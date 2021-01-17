import createResume from './create-resume'
import resumes from './resumes'

const resolvers = {
  Query: {
    resumes,
  },
  Mutation: {
    createResume,
  }
}

export {resolvers as default}


import {Resume} from '../mongo/models'

const resumes = async (_, __, context) => {
  const allResumes = await Resume.find()

  return {
    edges: allResumes.map((resume) => ({
      node: {
        id: resume._id,
        name: resume.name,
        description: resume.description,
        user_id: resume.user_id,
      },
    })),
  }
}

export {resumes as default}
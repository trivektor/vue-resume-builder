import {Resume} from '../mongo/models'

const resumes = async (_, __, context) => {
  const allResumes = await Resume.find({user_id: context.userId}).sort({created_at: -1})

  return {
    edges: allResumes.map((resume) => ({
      node: {
        id: resume._id,
        name: resume.name,
        description: resume.description,
        user_id: resume.user_id,
        created_at: resume.created_at,
        updated_at: resume.updated_at,
      },
    })),
  }
}

export {resumes as default}
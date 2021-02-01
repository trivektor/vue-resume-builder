import {Resume} from '../mongo/models'

const getResume = async (parent, {resumeId}, context, info) => {
  const resume = await Resume.findById(resumeId)

  return resume
}

export {getResume as default}
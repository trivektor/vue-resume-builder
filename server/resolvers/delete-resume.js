import {Resume} from '../mongo/models'

const deleteResume = async (root, {resumeId}) => {
  try {
    await Resume.findByIdAndDelete(resumeId)

    return true

  } catch (err) {
    return false
  }
}

export {deleteResume as default}
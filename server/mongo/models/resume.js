import mongoose from 'mongoose'

const resume = mongoose.model(
  'Resume',
  new mongoose.Schema(
    {
      name: String,
      description: String,
      user_id: String,
    }
  )
)

export {resume as default}
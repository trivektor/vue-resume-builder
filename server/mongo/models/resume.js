import mongoose from 'mongoose'

const resume = mongoose.model(
  'Resume',
  new mongoose.Schema(
    {
      name: String,
      description: String
    }
  )
)

export {resume as default}
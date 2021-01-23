import mongoose from 'mongoose'

const resume = mongoose.model(
  'Resume',
  new mongoose.Schema(
    {
      name: String,
      description: String,
      user_id: String,
    },
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  )
)

export {resume as default}
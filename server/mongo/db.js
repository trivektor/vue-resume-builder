import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config();
const db = mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true})

export {db as default}


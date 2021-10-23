import mongoose from 'mongoose';

const postsSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
},{ versionKey : false });

export const Posts = mongoose.model('posts', postsSchema);
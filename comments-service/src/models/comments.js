import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
  postId: String,
  body: String,
  createdAt: { type: Date, default: Date.now },
},{ versionKey : false });

export const Comments = mongoose.model('comments', commentsSchema);
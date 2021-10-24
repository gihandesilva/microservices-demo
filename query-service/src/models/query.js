import mongoose from 'mongoose';

const post = {
  _id: mongoose.Types.ObjectId,
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
};

const comment = {
  _id: mongoose.Types.ObjectId,
  body: String,
  createdAt: { type: Date, default: Date.now },
};

const querySchema = new mongoose.Schema({
  postId: { type: String, index: true },
  post,
  comments: [comment],
  createdAt: { type: Date, default: Date.now },
},{ versionKey : false });

export const Query = mongoose.model('queries', querySchema);
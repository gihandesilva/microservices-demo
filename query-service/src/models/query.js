import mongoose from 'mongoose';

const post = {//TODO: add _id: ObjectId
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
};

const comment = {//TODO: add _id: ObjectId
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
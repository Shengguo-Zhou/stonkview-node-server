import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  blogUsername: String,
  content: String,
}, {versionKey: false, collection: 'blogs'});

export default blogSchema;
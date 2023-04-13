import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  username: String,
  content: String,
}, {collection: 'blogs'});

export default blogSchema;
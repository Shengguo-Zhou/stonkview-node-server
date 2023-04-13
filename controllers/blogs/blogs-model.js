import mongoose from 'mongoose';
import blogSchema from './blogs-schema.js'

const blogsModel = mongoose.model('BlogModel', blogSchema);

export default blogsModel;
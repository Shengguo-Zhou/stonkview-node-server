import blogsModel from "./blogs-model.js";

export const findBlogs = () => blogsModel.find();
export const createBlog = (blog) => blogsModel.create(blog);
export const deleteBlog = (bid) => blogsModel.deleteOne({_id: bid});
export const updateBlog = (bid, blog) => blogsModel.updateOne({_id: bid}, {$set: blog});
import * as dao from './blogs-dao.js';

const BlogController = (app) => {

  const createBlog = async (req, res) => {
    const newBlog = req.body;
    const insertedBlog = await dao.createBlog(newBlog);
    res.json(insertedBlog);
  }

  const findBlogs = async (req, res) => {
    const blogs = await dao.findBlogs();
    res.json(blogs);
  }

  const updateBlog = async (req, res) => {
    const blogIdToUpdate = req.params.bid;
    const updates = req.body;
    const status = await dao.updateBlog(blogIdToUpdate, updates);
    res.json(status);
    res.sendStatus(200);
  }

  const deleteBlog = async (req, res) => {
    const blogIdToDelete = req.params.bid;
    const status = await dao.deleteBlog(blogIdToDelete);
    res.json(status);
  }

  app.post('/blogs', createBlog);
  app.get('/blogs', findBlogs);
  app.put('/blogs/:bid', updateBlog);
  app.delete('/blogs/:bid', deleteBlog);

}

export default BlogController;
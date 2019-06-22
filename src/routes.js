const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploader');
const LikeController = require('./app/controllers/LikeController');

const PostController = require('./app/controllers/PostController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;

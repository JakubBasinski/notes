const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  [
    body('title').trim().isLength({ min: 0 }),
    body('content').trim().isLength({ min: 0 }),
  ],
  isAuth,
  feedController.createPost
);

router.post('/updateStatus', isAuth, feedController.updateStatus);
router.get('/post/:postId', feedController.getPost);

router.put(
  '/post/:postId',
  [
    body('title').trim().isLength({ min: 0 }),
    body('content').trim().isLength({ min: 0 }),
  ],
  feedController.updatePost
);

router.delete('/post/delete/:postId', feedController.deletePost);

module.exports = router;

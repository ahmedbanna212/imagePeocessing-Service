import express from 'express';
import image from './api/image';

const Router = express.Router();

Router.use('/image', image);

Router.get('/', () => {
  console.log('---------routing---------');
});

export default Router;

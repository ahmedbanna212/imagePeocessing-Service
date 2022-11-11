import express from 'express';
import processor from '../../utilites/processor';
const image = express.Router();

image.get('/', processor, () => {
  console.log('------------the route of image processer---------');
});

export default image;

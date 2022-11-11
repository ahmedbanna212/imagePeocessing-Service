import express from 'express';
import NodeCache from 'node-cache';
import queryParams from './paramExtract';
import cacheChecker from './cacheChecker';
import imageResize from './imageResize';
export const myCache = new NodeCache();

const processor = async (
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> => {
  // extracting the query from the url
  const urlQuery = req.url.split('?')[1];
  //cacheing the query
  const cache: boolean = cacheChecker(urlQuery);

  myCache.set('query', urlQuery);
  const params = queryParams(urlQuery);
  //checking if the query checker is set to true or there is an error
  if (cache && params != null) {
    res
      .status(200)
      .sendFile(`${__dirname}\\assets\\resized\\${params.filename}.jpg`);
    console.log('data coming from cach');
  } else if (params != null && !cache) {
    const widthValue = parseInt(params.width)
    const heightValue = parseInt(params.width)
    if (( isNaN(widthValue) || (params.width.match(/[^\d.-]/g)!=null) )
    || isNaN(heightValue) || (params.height.match(/[^\d.-]/g)!=null)) {
      res.status(400).send('width or height are not correct');
    } else {
      const imageCondition = await imageResize(
        params.filename + '.jpg',
        parseInt(params.width),
        parseInt(params.height)
      );
      if (imageCondition) {
        res
          .status(200)
          .sendFile(`${__dirname}\\assets\\resized\\${params.filename}.jpg`);
      } else {
        res.status(400).send('file name is incorrect');
      }
    }
  } else {
    res
      .status(400)
      .send('please re-type the query paramters as some paramters are missing');
  }
  next();
};

export default processor;

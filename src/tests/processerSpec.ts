import cacheChecker from '../utilites/cacheChecker';
import imageResize from '../utilites/imageResize';
import NodeCache from 'node-cache';

const urlQuery = 'filename=ahmed&&width=300&&height=600';

describe('checking the the middleware functions', () => {
  beforeAll(function () {
    const myCache = new NodeCache();
    myCache.set('query', urlQuery);
  });
  it('checks if the resize function would work with correct paramters', async () => {
    const result = await imageResize('salah.jpg', 100, 100);
    expect(result).toBeTruthy();
  });
  it('checks if the resize function would work with incorrect paramters', async () => {
    const result = await imageResize('s.jpg', 200, 200);
    expect(result).toBeFalsy();
  });
  it('to check if the requested urlquery is the same is the one cahced previously', async () => {
    expect(cacheChecker(urlQuery)).toBeTruthy;
  });
});

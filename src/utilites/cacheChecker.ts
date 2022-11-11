import { myCache } from './processor';

export const cacheChecker = (query: string): boolean => {
  if (myCache.has('query') && myCache.get('query') == query) {
    console.log('image is in cache');
    return true;
  } else {
    return false;
  }
};

export default cacheChecker;

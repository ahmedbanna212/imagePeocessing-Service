import sharp from 'sharp';
import { promises as fs } from 'fs';
const filePath: string = __dirname + '/assets/full/';
const fileDist: string = __dirname + '\\assets\\resized\\';

const imageResize = async (
  path: string,
  height: number,
  width: number
): Promise<boolean> => {
  try {
    //reading the image
    const image = await fs.readFile(filePath + path);
    //resizing the image
    const resized = await sharp(image).resize(height, width).toBuffer();
    //opening the distination file to save the image after the resizing
    const myfile = await fs.open(fileDist + path, 'w+');
    //saving the image to the distination file
    await myfile.write(resized);
    myfile.close();
    console.log('image has been resized and saved ');
    return true;
  } catch (error) {
    return false;
  }
};

export default imageResize;

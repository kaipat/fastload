
import path from 'path';
import fs from 'fs';
import got from 'got';
import { createWriteStream } from 'fs';


function get_file_name(url) {
  return path.basename(url);
} 

export default function fastload(from, to, options) {
  try {
    const stat = fs.statSync(path.resolve(to));
    if (!stat.isDirectory()) {
      fs.mkdirSync(to);
    }
  } catch(err) {
    fs.mkdirSync(to); 
  }
  const readStream = got.stream(from);
  readStream.on('response', response => {
    readStream.pipe(
      createWriteStream(
        path.resolve(to, get_file_name(from))
      )
    )
  });
}


























































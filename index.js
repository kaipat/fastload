
import path from 'path';
import got from 'got';
import { createWriteStream } from 'fs';


function get_file_name(url) {
  return path.basename(url)
} 

export default function download(from, to, options) {
  const readStream = got.stream(from)
  readStream.on('response', response => {
    readStream.pipe(
      createWriteStream(
        path.resolve(to, get_file_name(from))
      )
    )
  })
}


























































const path = "./src/data.json";
const file = Bun.file(path);

const stream = await file.json();


function* generator() {
  while(true) {
    let curr = Math.floor(Math.random() * 100)

    let obj ={
      author: stream["quotes"][curr][1],
      quote:  stream["quotes"][curr][0]
    };

    yield obj;
  }
  return 0;
}

let gen = generator();


export default gen
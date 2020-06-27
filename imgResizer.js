const path = require("path");
const sharp = require("sharp");
const sizeOf = require("image-size");
const fs = require("fs");

const imgDir = "./content/images";
const imgFiles = fs.readdirSync("./content/images");

const resList = [320, 640, 960, 1280];

const imgExtensions = [".jpg", ".png", ".jpeg", ".webp"];
let images = {}

const resizeImage = (file, dir, output) => {
  const ext = path.extname(file);
  const baseName = path.basename(file, ext);
  const completePath = `${dir}/${file}`;
  const imgWidtgh = sizeOf(completePath).width;

  images[baseName] = []



  // for (const resWidth of resList) {
  //   if (resWidth < imgWidtgh) {
  //     images[baseName].push(resWidth)
  //     sharp(completePath)
  //       .resize(resWidth)
  //       .toFile(`${output}/${baseName}_${resWidth}.webp`, (err, info) => {
  //         // console.log(err, info);
  //       })
  //       .toFile(`${output}/${baseName}_${resWidth}${ext}`, (err, info) => {
  //         // console.log(err, info);
  //       });
  //   }
  // }
  sharp(completePath)
    .toFile(`${output}/${baseName}_1x.webp`, (err, info) => {
      // console.log(err, info);
    })
    .toFile(`${output}/${baseName}_1x.${ext}`, (err, info) => {
      // console.log(err, info);
    });
};

// generic images
for (const img of imgFiles) {
  resizeImage(img, imgDir, `./static/images`);
}

// project previews
const projectsDir = "./content/work";
const projectDirs = fs.readdirSync(projectsDir);
for (const projectDir of projectDirs) {
  const projectFiles = fs.readdirSync(`${projectsDir}/${projectDir}`);
  for (const projectFile of projectFiles) {
    const ext = path.extname(projectFile);
    if (imgExtensions.includes(ext)) {
      resizeImage(
        projectFile,
        `${projectsDir}/${projectDir}`,
        `./static/images`
      );
    }
  }
}

// console.log(images)

// fs.writeFileSync('./static/imgList.json', JSON.stringify(images))
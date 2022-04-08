const Handlebars = require("handlebars");
const fs = require("fs");
const argv = process.argv;

const componentType = argv[2]; // todo: sanity check
let path = argv[3]; // todo: sanity check

// pop the name from the path and upppercase the first char
path = path.split("/");
let name = path.pop();
name = name.charAt(0).toUpperCase() + name.slice(1);

// stitch back the path
path = path.join("/") + "/" + name;

console.log("Creating skeleton files for " + name + " in " + path);

// if dir exists, exit
if (fs.existsSync(path)) {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error("Error reading directory: " + err);
      process.exit(1);
    } else if (files.length) {
      console.log("Directory not empty, exiting");
      process.exit(1);
    }
  });
}

// create the dir
fs.mkdirSync(path, { recursive: true });

// check if root dir exists
const skeletonDir = ".skeleton/" + componentType;
if (!fs.existsSync(skeletonDir)) {
  console.log("Skeleton directory " + skeletonDir + " does not exist, exiting");
  process.exit(1);
}

// read the skeleton files and compile them
const files = fs.readdirSync(skeletonDir);
const skipFiles = ["config.json"];
// load the config file
const defaults = { section: "Components" };
let config = JSON.parse(fs.readFileSync(skeletonDir + "/config.json"));
config = Object.assign(defaults, config);
// read files and compile them with handlebars
files.forEach((file) => {
  // if file in skipFiles, continue
  if (skipFiles.includes(file)) return;
  // setup the new name
  let newFile = file.replace(/Component/, name);
  newFile = newFile.replace(/.handlebars/, "");
  // skip if file exists
  const outputPath = path + "/" + newFile;
  if (fs.existsSync(outputPath)) {
    console.log("Skipping " + outputPath + " as it already exists");
    return;
  }
  // read the file
  const filePath = skeletonDir + "/" + file;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const template = Handlebars.compile(fileContents);
  const output = template({
    name: name,
    type: componentType,
    section: config.section,
  });
  fs.writeFileSync(outputPath, output);
  console.log("🛠  created " + outputPath);
});

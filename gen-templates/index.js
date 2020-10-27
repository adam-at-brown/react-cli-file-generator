const fs = require('fs');
const { component, story, test, barrel } = require('./templates.js');

const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./src/components/${name}/`;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
} else {
  console.log('A component with that name already exists.')
};


function writeFileErrorHandler(err) {
  if (err) throw err;
}

fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.stories.jsx`, story(name), writeFileErrorHandler);
fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);

fs.readFile('./src/index.ts', 'utf8', function(err, data) {
  if (err) throw err;

  const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
  const newComponents = [name, ...currentComponents].sort();
  const importStatements = newComponents
    .map(importName => `import ${importName} from './components/${importName}';\n`)
    .join('');
  const exportStatements = `export {\n${newComponents
    .map(component => `  ${component},\n`)
    .join('')}};\n`;
  const fileContent = `${importStatements}\n${exportStatements}`;

  fs.writeFile(`./src/index.ts`, fileContent, writeFileErrorHandler);
});

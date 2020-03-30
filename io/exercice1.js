const fs = require('fs').promises;

async function copy(fileName, encoding) {
    const fileContent = await fs.readFile('./in/' + fileName, encoding);

    fs.writeFile('./out/' + fileName, fileContent, encoding);
}

copy('100_lines.csv', 'utf8');
copy('map.pdf');

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

function copy(fileName, encoding) {
    // on crée un objet readStream avec le fichier à lire
    const readStream = fs.createReadStream('./in/'+fileName, { encoding: encoding });
    // on crée un objet write stream qui "pointe" vers le fichier qui va recevoir la copie
    // (il sera vide poru le moment)
    const writeStream = fs.createWriteStream('./out/'+fileName + '.gz');

    // on connecte directement vers le flux de sortie
    readStream
        .pipe(gzip)
        .pipe(writeStream)
}

// execution
copy('100_lines.csv', 'utf8');
copy('map.pdf');

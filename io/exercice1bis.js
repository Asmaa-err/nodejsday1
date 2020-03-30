const fs = require('fs');

function copy(fileName, encoding) {
    // on crée un objet readStream avec le fichier à lire
    const readStream = fs.createReadStream('./in/'+fileName, { encoding: encoding });
    // on crée un objet write stream qui "pointe" vers le fichier qui va recevoir la copie
    // (il sera vide poru le moment)
    const writeStream = fs.createWriteStream('./out/'+fileName, { encoding: encoding });

    // on écoute le flux de lecture
    readStream.on('data', function(chunk) {
        // on peut envoyer le morceau de fichier lu au flux d'écriture
        writeStream.write(chunk);
    });

    readStream.on('close', function() {
        console.log('fichier en lecture fermé');
    });

    readStream.on('error', function(error) {
        console.log('fichier en lecture en erreur ', error);
    });

    writeStream.on('close', function() {
        console.log('fichier en écriture fermé');
    });

    writeStream.on('finish', function() {
        console.log('flux d écriture terminé');
    })
}

// execution
copy('100_lines.csv', 'utf8');
copy('map.pdf');

const fs = require('fs');
const http = require('http'); // inbyggda moduler.

http.createServer((req, res) => { // http metoden create Server tar 2 parametrar request och response
    fs.readFile('demo1.html', (err, data) => { // fs.readFile läser vad som står på dokumentet.
        res.writeHead(200, {'Content-Type': 'text/html'}); // Gör så servern läser html filer.
        res.write(data); // skriver innehållet i demo1.html till vår hemsida.
        return res.end(); // slutar kopplingen mellan server och frontend.
    });
}).listen(1338); // PORT 1338 används. http://localhost:1338.



// Update files.
fs.appendFile('newFile.txt', 'Mandus är bäst!\n', (err) => { // appendFile skapar filen. newFile.txt är namnet på filen. "Max är bäst!" är innehållet. 
    if(err) {// Om det blir fel, så skicka en error meddelandet.
        throw err;
    }

    console.log('Saved document!'); // annars, spara nya filen.
});

// Skapa en fil med innehåll
fs.writeFile('newFile2.txt', 'Denna text kommer ersättas yeah', (err) => {
    if(err) {
        throw err;
    }
    console.log('Document replaced!');
});

// Raderar en fil.
fs.unlink('newFile.txt', (err) => { // unlink() raderar en fil. 
    if(err) { // om error visa det i Terminalen.
        throw err;
    }

    console.log('Raderat Filen.'); // Om det fungerade, console.log() i Terminalen.
});

// Ändra namn på filer.
setTimeout(() => {
    fs.rename('newFile2.txt', 'renamedFile.txt', (err) => { // rename metod. tar 2 argument. 1:a gamla path. 2:a är ny path.
        if(err) { // if err show error in Terminalen. 
            throw err;
        }
    
        console.log('File renamed!'); // Om allt funkade. console.log i Terminalen bara.
    });
    console.log('Hello Editing');
}, 2000);


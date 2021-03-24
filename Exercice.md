# esgi-nodejs-partie-3-systeme-de-fichiers
Cours Node.jsCours Node.js - Partie 3 - Utilisation du système de fichiers


### Q1 : Complétez le programme Node.js ci-dessous puis cliquez sur "Run" pour le tester:
```
const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

// TODO: récupèrer dans une variable le contenu du fichier spécifié par `fichierSource`, avec fs.readFileSync()
let contenu = fs.readFileSync(fichierSource);

// TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable
contenu = contenu.toString('utf8').toLowerCase();

// TODO: afficher le contenu de cette variable
console.log(contenu);

// TODO: écrire ce contenu modifié dans le fichier `résultat.txt`
fs.writeFileSync(fichierDestination, contenu);

```

### Q2 : Complétez le programme Node.js ci-dessous puis cliquez sur "Run" pour le tester:
```
const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

// TODO: récupèrer dans une variable le contenu du fichier spécifié par `fichierSource`, avec fs.readFile()
fs.readFile(fichierSource, async (err, data) => {

    if (!err) {
        // TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable
        contenu = data.toString('utf8').toLowerCase();

        // TODO: afficher le contenu de cette variable
        console.log(contenu);

        // TODO: écrire ce contenu modifié dans le fichier `résultat.txt`
        fs.writeFile(fichierDestination, contenu, (err) => {
            // TODO: en cas d'erreur d'écriture de fichier: afficher le message d'erreur dans la sortie d'erreurs
            // console.error ...
            if (err) {
                console.error(err);
            }
        });

    } else {
        // TODO: en cas d'erreur de lecture de fichier: afficher le message d'erreur dans la sortie d'erreurs
        // console.error ...
        console.error(err);
    }
        
});

```

### Q3 : Complétez le programme Node.js ci-dessous puis cliquez sur "Run" pour le tester:
```
const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

function lireFichier(nomFichier, callback) {
  // TODO: récupèrer le contenu du fichier passé en paramètre, avec fs.readFile()
  // TODO: appeler callback(err) en cas d'erreur
  // TODO: appeler callback(null, contenu) en cas de lecture réussie
    fs.readFile(nomFichier, async (err, data) => {
        if (err){
            callback(err);
        }else{
            callback(null, data);
        }
    });

}

// TODO: appeler la fonction lireFichier() pour récupérer le contenu de `fichierSource`
// TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable
// TODO: afficher le contenu de cette variable
// TODO: écrire ce contenu modifié dans le fichier `résultat.txt`
// TODO: intercepter les erreurs => les afficher dans la sortie d'erreurs
lireFichier(fichierSource, (err, data) => {
    if (err) {
        console.error(err);
    }else{
        const contenu = data.toString('utf8').toLowerCase();
        console.log(contenu);
        fs.writeFile(fichierDestination, contenu, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
});

```

### Q4 : Complétez le programme Node.js ci-dessous puis cliquez sur "Run" pour le tester:
```
const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

function lireFichier(nomFichier) {
  // TODO: récupèrer le contenu du fichier passé en paramètre, avec fs.promises.readFile()
  // TODO: retourner la promesse qui sera résolue en fin de lecture (ou rejetée, en cas d'erreur)
    return fs.promises.readFile(nomFichier);

}

// TODO: appeler la fonction lireFichier() pour récupérer le contenu de `fichierSource`
lireFichier(fichierSource).then(res => {    
    // TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable
    const contenu = res.toString('utf8').toLowerCase();
    // TODO: afficher le contenu de cette variable
    console.log(contenu);
    // TODO: écrire ce contenu modifié dans le fichier `résultat.txt`, avec fs.promises.writeFile()
    fs.promises.writeFile(fichierDestination, contenu).then(resolve => {

    }, rejected => {
        console.error(rejected);
    });
}, rejected => {
    console.error(rejected);
}).catch(e => {
    // TODO: intercepter les erreurs => les afficher dans la sortie d'erreurs
    console.error(e);
});

```

### Q5 : Complétez le programme Node.js ci-dessous puis cliquez sur "Run" pour le tester:
```
const fs = require('fs');

const fichierSource = process.argv[2]; // nom de fichier récupéré depuis arguments de ligne de commande
const fichierDestination = 'résultat.txt';

function lireFichier(nomFichier) {
  // TODO: récupèrer le contenu du fichier passé en paramètre, avec fs.promises.readFile()
  // TODO: retourner la promesse qui sera résolue en fin de lecture (ou rejetée, en cas d'erreur)
    return fs.promises.readFile(nomFichier);

}

(async () => {
    try{
        // TODO: appeler la fonction lireFichier() pour récupérer le contenu de `fichierSource`
        let contenu = await lireFichier(fichierSource);
        // TODO: remplacer toutes les lettres majuscules de ce contenu par des minuscules, en modifiant la variable
        contenu = contenu.toString('utf8').toLowerCase();
        // TODO: afficher le contenu de cette variable
        console.log(contenu);
        // TODO: écrire ce contenu modifié dans le fichier `résultat.txt`, avec fs.promises.writeFile()
        await fs.promises.writeFile(fichierDestination, contenu);
    } catch (e) {
        console.error(e);
    }
})();

```

Site web source :
- https://adrienjoly.com/cours-nodejs/
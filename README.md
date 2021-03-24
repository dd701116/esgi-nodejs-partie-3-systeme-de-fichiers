# esgi-nodejs-partie-3-systeme-de-fichiers
Cours Node.jsCours Node.js - Partie 3 - Utilisation du système de fichiers

## Installation

- Clonner le repos
```
    git clone https://github.com/dd701116/esgi-nodejs-partie-3-systeme-de-fichiers.git
```

- Installer les dépendances
```
    cd esgi-nodejs-partie-3-systeme-de-fichiers
    npm install
```

- Lancer le serveur
```
    npm start
```

## Déploiement sur Heroku

```
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
Enter your Heroku credentials.
...
$ heroku create
Creating arcane-lowlands-8408... done, stack is cedar
https://protected-woodland-06129.herokuapp.com | git@heroku.com:arcane-lowlands-8408.git
Git remote heroku added
$ git push heroku main
```

## Les endpoints

### GET /
Affiche "Bonjour !"

### GET /hello
```
{
    nom : <Le nom d'un utilisateur>
}
```
Affiche "Bonjour \<Le nom d\'un utilisateur\> !"<br>
Dans le cas ou nom est vide, il affiche "Quel est votre nom ?"

### POST /chat
```
{
    msg: <Un message> OU <Un message = Une valeur>
}
```
Affiche "<Une valeur\>" si msg == '<Un message\>'<br>
Affiche "Merci pour cette information !" si msg == '<Un message\> = <Une valeur\>'<br>
Affiche "Je ne connais pas <Un message\> !" si '<Un message\>' n'a j'amais été ajouté dans la base de données<br>
Affiche "Je n'ai rien reçu :(" si '<Un message\>' est vide ou ne contient que '='

## DEMO

Affiche le site de github (regardez l'url)
Déployé sur heroku => https://protected-woodland-06129.herokuapp.com/?url=https://github.com

<br>
<hr>

Site web source :
- https://adrienjoly.com/cours-nodejs/

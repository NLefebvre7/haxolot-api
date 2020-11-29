# HAXOLOT

## URL
```
127.0.0.1:3000
```

## Launch docker
```
docker-compose up
```

## Back-end testé sur postman (Api node.postman_collection.json)

### Page d'accueil :

teamDescription), école (school), nom du projet (projectTitle), description du projet (projectDescription) Sortie : String "Team créé"


### Connexion en tant qu'utilisateur :
```
Entrée : login, password (login_an_user) Sortie : token, variable de session Next : entrée token et session, sortie : liste des teams (teamList) (array contenant les nom et école des team appartenant à la même école que l'utilisateur - à modifier si besoin en fonction des informations à afficher), chaque team dans la liste est un lien vers les détails de la team Next : entrée : nom de la team et token , sortie : toutes les informations sur la team (teamDetails)

```

### Création de compte utilisateur Entrée :
```
Nom (name), prénom (firstname), téléphone (phoneNumber), email (email), école (school) Sortie : String "utilisateur créé" Scenario : créer des teams, créer compte user, se connecter en tant que user (obtenir un token et l'email de l'user stocké dans la variable session), obtenir la liste des teams de son école (token doit être valide et email dans la variable session remplie), obtenir les détails de la team s'il clique dessus (token valide et nom de la team donnée)

```










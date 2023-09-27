# 🏆 Modèle optimisé pour intégrer un fonctionnemant accessible en Dark-mode
![Alt text](./asset/cover.png)
Ce principe de Dark-mode développé en javascript représente un modèle qu'on peut facilement 
adapter à son projet.

## Fichier js

>Concernant les fichiers js pour la propreté du code j'ai mis en place un fichier de structuration
"themeSwitcher.js" où on peut voir la sélection des propriétés css pris en charge qui se trouvent dans le fichier "style.css".
L'évènement de changement de mode se trouve à dans le fichier "app.js". Pour le changement de mode on importe tous simplement le fichier "themeSwitcher.js" par la ligne de code : "import { toggleDarkTheme } from "./themeSwitcher.js"
qui se trouve au début du fichier "app.js". Attention l'import est possible parce que dans le fichier appelé il y a la fonction qui commence par le mot clé "export const toggleDarkTheme = (theme)=>", suivie du nom de la fonction.


## Partie html
>Dans la partie html la balise script contient un nouvel attribut "_type="module"_" , cela permet tout simplement de détecter que le fichier principale javascript importe un autre fichier js. En résumé si vous voulez que cela fonctionne vous devez écrire la balise _script_ de la façon suivante : 
```js 
<script 
    type="module" 
    src="./js/app.js">
</script>
    
```
>Bon travail!
> &copy;  [Giuseppe Militello](https://www.linkedin.com/in/giuseppe-militello-22406ab0/) - All rights reserved for educational purposes only
> 
![Bower License](https://img.shields.io/bower/l/a)



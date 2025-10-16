
# TP HTML – Création d’un cv

 voici le lien de la page déployé sur github:
  https://ranya001.github.io/cv/
## Étape 1 – Structure HTML

### 🔹 Objectif :
Créer la structure de base du CV dans un fichier nommé `ubo-resume.html`.

### 🔸 Tâches :
1. Créer un fichier HTML5 valide.
2. Ajouter les balises principales : `<header>`, `<main>`, `<section>`, `<footer>`.
3. Insérer les informations personnelles, formations, expériences et compétences.
4. Ajouter un footer contenant des liens (LinkedIn, GitHub, etc.) avec un minimum d’informations.
5. Tester l’affichage dans le navigateur.
6. Ajouter dans Git et créer un **tag “Structure”**.

**Explications :**
- `<header>` contient ton nom, ta fonction, et éventuellement une photo.
- `<main>` regroupe la présentation, les formations et les expériences.
- `<section>` divise les différentes parties du CV.
- `<footer>` affiche des liens et des infos de contact.


##  Étape 2 – Feuille de style CSS

### 🔹 Objectif :
Appliquer un style visuel au CV avec un fichier `css/resume.css`.

### 🔸 Tâches :
1. Créer un dossier `css/` et le fichier `resume.css`.
2. Lier le fichier CSS au HTML :
```html
<link rel="stylesheet" href="css/resume.css">
```
3. Utiliser les sélecteurs CSS pour styliser les titres, les listes, les liens et le corps du texte.
4. Utiliser les balises `<dt>` et `<dd>` pour les listes de compétences.
5. Ajouter les icônes Font Awesome :
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
```
6. Tester l’affichage et créer le tag `CSS` dans Git.

---

## Étape 3 – Adaptatif / Responsive

### 🔹 Objectif :
Adapter la page pour les écrans de différentes tailles.

### 🔸 Tâches :
1. Créer `css/responsive.css` avec les media queries :
```css
@media only screen and (max-width: 740px) {
  #wrapper { background: #f77; }
}
```
2. Ajouter ce fichier dans la page HTML :
```html
<link rel="stylesheet" href="css/responsive.css">
```
Quand on redimensionnes la fenêtre du navigateur (tu la rends plus petite ou plus grande) :

-   la couleur de fond de la page change automatiquement selon la largeur.  
    C’est la **preuve** que les _media queries_ fonctionnent.
3. Supprimer les couleurs de fond et mettre la page sur une seule colonne :
```css
@media only screen and (max-width: 740px) {
  #wrapper { width: 100%; }
  header, main, aside, footer {
    float: none;
    width: 100%;
  }
}
```
4. Centrer les titres :
```css
h1, h2 ,h3{ text-align: center; }
```
5. Valider et tagger `responsive` dans Git.

---

##  Étape 4 – Micro-données (Microdata)

### 🔹 Objectif :
Rendre la page compréhensible par les moteurs de recherche grâce à [schema.org](https://schema.org).



## ✅Résumé des tags Git

| Étape | Tag | Description |
|--------|------|-------------|
| Structure HTML | `Structure` | Squelette du CV |
| CSS | `CSS` | Style visuel |
| Responsive | `Responsive` | Design adaptatif |
| Microdata | `Microdata` | Métadonnées SEO |

---

## Résultat attendu

- Un **CV HTML5/CSS3** propre et valide.  
- Une page **responsive**, lisible sur mobile.  
- Des **micro-données** intégrées (schema.org/Person).  
- Un projet complet versionné sur **GitLab** avec les bons tags.

# README – TP Développement Web
Le projet est organisé de manière simple et claire :

index.html : structure principale du CV avec sections pour le profil, expériences et compétences.

style.css : styles pour l’ensemble des éléments, responsive et moderne.

script.js : comportements interactifs (boutons, tooltips, histogrammes).

3. Fonctionnalités
a. Expériences professionnelles

Chaque expérience dispose d’un bouton + pour afficher ou cacher les détails.

L’animation est fluide grâce à JS (expand() / collapse()).

b. Compétences

Les compétences sont affichées sous forme de liste <dl>.

Chaque compétence a une barre horizontale colorée indiquant le niveau.

Les tooltips apparaissent au survol pour donner des informations complémentaires.

c. Histogramme des compétences

Les barres sont proportionnelles au niveau de chaque compétence.
d/Tooltips :
Au survol d’une compétence, une bulle apparaît avec une courte description


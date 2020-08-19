# Contribuir a Asamblea Tracker

Muchísimas gracias por el interés en contribuir.

## Proceso de desarrollo

Uso Github para recibir reportes de issues y organizar propuestas de mejoras.

## Pull Requests

Cualquier Pull Request es bienvenidas.

1. Crea un Fork del repositorio y crea tu rama desde `master`.
2. (Recomendado) Si utilizas Visual Studio Code, asegurate de implementar el fichero `settings.json` incluído en el folder `.vscode`. Si no, por favor utiliza 4 espacios cómo tabs.

## Guía de estilos para Git

Vincent Driessen nos dio un regalo que estoy seguro apreciarás, [Gitflow](https://nvie.com/posts/a-successful-git-branching-model/). Seguramente ya sabes de qué va Git, por lo que puedes empezar la lectura desde [aquí](https://nvie.com/posts/a-successful-git-branching-model/#the-main-branches).

Para sintetizar la información de los artículos, por el momento solo haremos uso de 3 tipos de ramas:

1. `master`: Rama estable del projecto. No acepta `git push`es. Recibe PRs de `develop`.
2. `develop`: Rama búfer, con los últimos cambios y arreglos. Recibe las PRs de contribuciones. No acepta `git push`es.
3. `feature`: Cualquier feature que tú quieras incluir. Ejemplos: feature/adding-search-box, feature/adding-party-filter o feature/adding-nice-header

Para el mensaje, inicia con un verbo en presente y sé lo más conciso posible. No te excedas de 72 caracteres.

> Puedes utilizar inglés o español para los commits. Inglés es preferible.

## Estilo de Código

-   4 spaces for indentation rather than tabs

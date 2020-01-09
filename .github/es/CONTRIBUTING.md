> TODO: English version

# Contribuir a Asamblea Viewer

¡Gracias! Muchísimas gracias por tu interés en contribuir.

## Proceso de desarrollo

Uso Github para recibir reportes de issues y organizar propuestas de mejorars, también para aceptar Pull Requests.

## Pull Requests

Tus Pull Request son bienvenidas.

1. Crea un Fork del repositorio y crea tu rama desde master `master`.
2. Si añadiste código que debería ser testeado, por favor añade los tests.
3. Si añades tests, asegurate que todos pasen exitosamente.
4. (Recomendado) Si utilizas Visual Studio Code, asegurate de implementar el fichero `settings.json` incluído en el folder `.vscode`. Si no, por favor utiliza 4 espacios cómo tabs.

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
-   80 character line length
-   Run `npm run lint` to conform to our lint rules

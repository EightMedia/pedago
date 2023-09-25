# Pedago Game

The Pedago Game is a virtual version of the physical card game: https://www.youtube.com/watch?v=dAqDFNFu7m8.
The game consists of a server running socket.io and a nextjs frontend.

## Installation

The App consists of a server and a game-client.

## Development

Run the server:

```
yarn dev:server
```

Run the client:

```
yarn dev:client
```

### Create new components

To create consistent components use the skeleton script.
In `.skeleton` the skeleton files for various component types exist.

usage:

```
yarn skeleton view lib/views/my/AwesomeView
```

- in the config.json the storybook section can be defined
- `Component` in the filename is replaced with the component's name
- .handlebars files are compiled with the variables type, name, section.
- the .handlebars extension is removed.

So ie: `.skeleton/view/Component.stories.tsx.handlebars` is compiled and becomes `lib/views/my/AwesomeView/AwesomeView.stories.tsx`

Deploy the server:

- Login to Heroku with the Heroku CLI
- Execute command `git push heroku main`

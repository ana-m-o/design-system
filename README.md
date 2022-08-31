# Storybook Design System

Modulo de componentes basados en react 17+ y ant design

## Instalación

Homebrew:
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

`echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/{{ username }}/.zprofile`

`eval "$(/opt/homebrew/bin/brew shellenv)"`

Node: `brew install node`

## Proyecto, Documentación y Storybook

Instalación: `npm i`.

Compilación de componentes y css, necesita ejecutarse al menos una vez: `npm run build`.

Watch (compilación de componentes y css automática al guardar): `npm run watch`.

Ejecutar Storybook en local: `npm run storybook`.

Desplegar Storybook en GitHub Pages: `npm run deploy-storybook`. Url: https://ana-m-o.github.io/design-system/

## UX Docs

Para añadir una página de documentación .mdx a un componente se crea un archivo `NombreDelComponente.stories.mdx`.

1- En el archivo .jsx del componente hay que importar el mdx:

```
import NombreDelComponenteMdx from './NombreDelComponente.stories.mdx';

```

2- Añadir en export default { ... }

```
export default {
    title: 'NombreDelComponente',
    component: NombreDelComponente,
    parameters: { uxDocs: NombreDelComponenteMdx }, // ESTA LÍNEA

    ...

```

## Añadir prototipp de figma a mdx

Configurar el prototipo para que se adapte al ancho.

Copiamos el código `iframe` para incrustar en Figma.

Al pegar dentro de un MDX eliminar el atributo `style` del `iframe`.

## Ocultar tabs

Si queremos ocultar alguna de las tabs de la página de storybook se hace así:

```
parameters={{
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
        canvas: {
            hidden: true
        }
    }
}}
```

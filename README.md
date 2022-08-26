# uiverse-components
Modulo de componentes basados en react 17+ y ant design

## Documentación y Storybook
Para ejecutar Storybook: `npm run storybook`

## UX Docs

Para añadir una página de documentación .mdx a un componente se crea un archivo `NombreDelComponente.stories.mdx`.

1- En el archivo .jsx del componente hay que importar el mdx:

````
import NombreDelComponenteMdx from './NombreDelComponente.stories.mdx';

````

2- Añadir en export default { ... } 

````
export default {
    title: 'NombreDelComponente',
    component: NombreDelComponente,
    parameters: { uxDocs: NombreDelComponenteMdx }, // ESTA LÍNEA

    ...

````

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
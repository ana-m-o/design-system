export const dataSource = [
  {
    key: '1',
    name: 'No ellipsis rendered column - Main text - Mike MikeMike MikeMike MikeMike MikeMike MikeMike MikeMike MikeMike MikeMike MikeMike Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: 'Ellipsis renderer column - Needs prop tableLayout="fixed" - See "Cell Renderers" page for more info'
  }
];

export const cellRenderersData = [
  {
    key: '0',
    style: 'Default',
    className: '',
    example: '10 Downing Street',
    renderer : '',
    use: 'Estilo de texto por defecto',
  },
  {
    key: '1',
    style: 'Main text',
    className: 'main-text',
    example: 'Main column text',
    renderer : '{text => <div className="main-text">{ text }</div>}',
    use: 'Se usa en el dato más importante de la tabla',
  },
  {
    key: '2',
    style: 'Date',
    className: 'date-text',
    example: '28/10/2021 - 18:35',
    renderer : '{text => <div className="date-text">{ text }</div>}',
    use: 'Para fechas y horas',
  },
  {
    key: '3',
    style: 'Secondary text',
    className: 'secondary-text',
    example: 'Description of de main data',
    renderer : '{text => <div className="secondary-text">{ text }</div>}',
    use: 'Textos de importancia baja como descripciones',
  },
  {
    key: '4',
    style: 'Lined Background',
    className: 'lined-bg hbox pack-center secondary-text',
    example: ' n/a ',
    renderer : '{text => <div className="lined-bg hbox pack-center secondary-text">{ text }</div>}',
    use: 'Celda en la que los datos no aplican',
  },
  {
    key: '5',
    style: 'Show on hover',
    className: 'show-on-hover',
    example: <span className="hbox align-center gap-md">shown on hover! <span class="icon-arrow-line text-rotate-90-cw" /></span>,
    renderer : '<span class="icon-arrow-line text-rotate-90-cw" />}',
    use: 'Botones de acción como navegar, borrar, editar...',
  }
];
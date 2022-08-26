import React from 'react';
import OperationStatus from '../src/OperationStatus/OperationStatus';
import Tag from '../src/Tag';
import { render, screen } from '@testing-library/react';

const stagesDefault = [{
    'stage'      : 'Connecting to the server',
    'description': 'Stage description',
    'status'     : 'completed',
    'percent'    : 100,
    'time'       : '0h 06\' 32"',
},
{
    'stage'      : 'Authenticating',
    'description': 'Stage description',
    'status'     : 'in progress',
    'percent'    : 43,
    'time'       : '0h 03\' 47"',
},
{
    'stage'      : 'Retrieving information',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
},
{
    'stage'      : 'Register Scheduled deploy',
    'description': '',
    'status'     : 'pending',
    'percent'    : 0,
    'time'       : '',
    'extra'      : [ <Tag size="medium" key="id">Request ID: <span className="uiv-font-black">123092345763284527634</span></Tag>, 'Other extra' ],
}];

describe('OperationStatus component', () => {
    it('must render its content', () => {
        render(<OperationStatus />);
        const os = screen.getByText('Operation status'); // Default header text
        expect(os).toBeInTheDocument();
        expect(os).toHaveClass('title-text');
    });


    // TEST TO-DO
    // - Stages

    it('must render stages when there is data', () => {
        render(<OperationStatus stages={stagesDefault} />);
        const stages = screen.getByRole('tablist');
        expect(stages).toBeInTheDocument();
        expect(stages).toHaveClass('ant-collapse');
    });

    //    - stage-item completado en success:
    //        - Panel no tiene clase disabled
    //        - Se muestra el time en formato 1h 02m 03s
    //        - No hay barra Progress
    //        - El status indicator tiene status="ok" text="Completed"


    //    - stage-item completado en error: a definir

    //
    //    - stage-item en progreso:
    //        - Panel no tiene clase disabled
    //        - Se muestra el time en formato 1h 02m 03s
    //        - se muestra Progress debe tener prop percent
    //        - El status indicator tiene status="wip" text="In progress..."
    //

    //    - stage-item en progreso en warning:
    //        - Todo el Panel tiene la clase "warning"
    //        - Se muestra el time en formato 1h 02m 03s
    //        - Se muestra Progress. Tiene la clase "warning" e "infinite"

    //    - stage-item no ejecutado:
    //        - Panel con clase disabled
    //        - El span con clase 'time empty' y debe contener el texto '·'
    //        - su StatusIndicator debe ser disabled
    //        - Se muestra Progress y debe tener percent={0}
    //
    //
    //    - wait item no ejecutado:
    //        - No es un panel, es un div con class="wait-item"
    //        - Muestra el tag con el icono "ui-icon-sand-clock" (también cuando el operation status no tiene la prop showNumbers)
    //        - su StatusIndicator debe ser status="disabled" e IconCls="icon-ellipsis-horizontal-line"
    //
    //    - wait item en progreso:
    //        - Muestra el tag con el icono "ui-icon-sand-clock" (también cuando el operation status no tiene la prop showNumbers)
    //        - No es un panel, es un div con class="wait-item"
    //        - su StatusIndicator debe ser status="idle" e IconCls="icon-ellipsis-horizontal-line"

    // - Operation status showNumbers={true}
    //    - Cada stage-item contiene un elemento con clase .uiv-tag
    //


});


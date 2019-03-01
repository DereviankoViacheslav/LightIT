
import getHtmlObject from '../../lib/FactoryHtml';

const div = getHtmlObject('div');
const canvas = getHtmlObject('canvas');

const chart = canvas.createHtmlElement(
    'chart',
    [{
        name: 'id',
        value: 'popChart'
    }],
    'null'
);

const modalTitle = div.createHtmlElement(
    'modal-title h3 text-center font-weight-bold',
    null,
    'Gender users'
);

const modalContent = div.createHtmlElement(
    'modal-content p-5',
    null,
    [modalTitle, chart]
);

const modalDialog = div.createHtmlElement(
    'modal-dialog modal-lg',
    [{
        name: 'role',
        value: 'document'
    }],
    [modalContent]
);

export default div.createHtmlElement(
    'modal fade bd-modal-lg',
    [{
            name: 'id',
            value: 'modal'
        },
        {
            name: 'tabindex',
            value: '-1'
        },
        {
            name: 'role',
            value: 'dialog'
        },
        {
            name: 'aria-labelledby',
            value: 'myLargeModalLabel'
        },
        {
            name: 'aria-hidden',
            value: 'true'
        }
    ],
    [modalDialog]
);
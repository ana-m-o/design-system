const defaultLayout = ({ orientation = 'vertical', mainComponent, sideComponent }) => ({
    dockbox: {
        mode    : 'vertical',
        children: [
            {
                mode    : orientation,
                children: [
                    {
                        tabs: [
                            { id: 'HeadlessWindow', title: '', content: mainComponent, group: 'headless' },
                        ],
                    },
                ],
            },
            {
                mode    : orientation,
                children: [
                    {
                        tabs: [
                            { id: 'DockedWindow', title: '', content: sideComponent, group: 'dockedWindow' },
                        ],
                    },
                ],
            },
        ],
    },
});

/*

floatbox: {
        mode    : 'float',
        children: [
            {
                tabs: [{
                    id     : 'float',
                    title  : 'New Window',
                    content: (
                        <div>
                            <p>Right click on the max button ⇗</p>
                        </div>
                    ),
                    group: 'dockedWindow',
                }],
                x: 60, y: 60, w: 320, h: 300,
            },
        ],
    },
    */

/*
const defaultLayout = ({ orientation = 'vertical', mainComponent, sideComponent }) => ({
    dockbox: {
        mode    : orientation,
        children: [
            {
                tabs: [
                    { id: 'HeadlessTop', title: '', content: mainComponent, group: 'dockedWindow' },
                ],
            },
            {
                tabs: [
                    { id: 'DockedBottom', title: '', content: sideComponent, group: 'dockedWindow' },
                ],
            },
        ],
    },
});
*/


const DOCKED_LAYOUT_TEMPLATES = {
    DEFAULT: defaultLayout,
};

export default DOCKED_LAYOUT_TEMPLATES;
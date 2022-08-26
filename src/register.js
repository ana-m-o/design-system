// /my-addon/src/register.js

import { addons, types } from '@storybook/addons';

import { Tab } from './addons/Tab'; // Register the addon

const ADDON_ID = 'usage';
const TAB_ID = `${ADDON_ID}/tab`;

addons.register(ADDON_ID, () => {
    addons.add(TAB_ID, {
        type  : types.TAB,
        title : 'Usage',
        route : ({ storyId }) => `/usage/${storyId}`,
        match : ({ viewMode }) => viewMode === 'usage',
        render: Tab,
    });
});


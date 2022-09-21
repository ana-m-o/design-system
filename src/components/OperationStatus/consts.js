const statusMap = {
    'pending'    : { color: 'idle', icon: '' },
    'completed'  : { color: 'ok', icon: '' },
    'in progress': { color: 'wip', icon: '' },
    'deleting'   : { color: 'wip', icon: '' },
    'error'      : { color: 'ko', icon: '' },
    'warning'    : { color: 'wip', icon: '' },
    'cancelled'  : { color: 'disabled', icon: '' },
    'scheduled'  : { color: 'wip', icon: 'dx-icon-sand-clock' },
    'deleted'    : { color: 'disabled', icon: 'icon-cancel-line' },
};

export { statusMap };

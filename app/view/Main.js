Ext.define('mapinfobuble.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        layout: 'card',
        
        items: [{
            xtype: 'infomap'
        }, {
            xtype: 'details'
        }]
    }
});

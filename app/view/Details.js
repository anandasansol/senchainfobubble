Ext.define('mapinfobuble.view.Details', {
    extend: 'Ext.Container',
    xtype: 'details',
    config: {
        styleHtmlContent:true,
        scrollable: true,
        
        tpl: [
        '<div class="desc">{description}</div>'
        ].join(''),
        
        items:[{
            xtype:'titlebar',
            title: 'Details',
            docked:'top',
            items:[{
                xtype:'button',
                text: 'Back',
                ui:'back',
                name:'backBtnToMap'
            }]
        }]
    }
});

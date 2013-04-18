Ext.define("mapinfobuble.view.Map",{
    extend: 'Ext.Container',
    xtype: 'infomap',
    requires: ['Ext.Map', 'Ext.TitleBar'],
    config:{
        layout : 'fit',
        items : [{
            docked: 'top',
            xtype: 'titlebar',
            title: 'Map with InfoBubble'
        },{
            xtype: 'map',
            name : 'infoMap',
            cls : "my-map",
            listeners: {
                maprender : function(comp, map){
                    this.map = map;
                    console.log('Rendering..');
                }
            }  
        }]
       
    }
});
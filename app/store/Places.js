Ext.define('mapinfobuble.store.Places', {
    extend : 'Ext.data.Store',
    config : {
        model : 'mapinfobuble.model.Place',
        proxy: {
            
            type: 'ajax',
            url: 'app/data/MapData.json',
            reader: {
                type: 'json',
                rootProperty :'places'
            }
        }
    }
});

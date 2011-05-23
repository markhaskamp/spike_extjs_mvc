Ext.onReady(function() {
  Ext.Loader.setConfig({enabled:true});
});

Ext.application({
    name: 'AM',
    appFolder: 'app',
    controllers: [
        'Users'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Users',
                    html : 'List of users will go here'
                }
            ]
        });
    }
});


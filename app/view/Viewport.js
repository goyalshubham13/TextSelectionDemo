Ext.define('TextSelection.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'TextSelection.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'main'
    }]
});

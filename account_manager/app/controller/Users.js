Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: [ 'Users' ],
    models: [ 'User' ],
    views:  [ 'user.List', 'user.Edit' ],

    init: function() {
            
        this.control({
          'viewport > userlist': {
            itemdblclick: this.editUser
          },
          'useredit button[action=save]': {
            click: this.updateUser
          }
        });
    },

    editUser: function(grid, record) {
      var view = Ext.widget('useredit');
      view.down('form').loadRecord(record);
    },

    updateUser:function(button) {
      console.log('clicked the Save button');
    }

});


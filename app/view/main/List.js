/**
 * This view is an example list of people.
 */
Ext.define('app13.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'app13.store.ImagenStore'
    ],

	itemId: 'imagenes',
    title: 'Imagenes',
    
    frame:true,

    store: {
        type: 'imagen'
    },
    
    scrollable: true,

    columns: [
    	{ text: 'Id',  dataIndex: 'id' , flex: 1},
        { text: 'Name',  dataIndex: 'name' , flex: 1},
        { 
        	text: 'Url', dataIndex: 'url', flex: 1,
	        renderer: function(value) {
	            return Ext.String.format(
	            	'<center><a href="{0}" target="_blank">'+
	            		'<img src="{0}" width="30" >'+
	            	'</a></center>', 
	            	value
	            );
	        }
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

Ext.define("TextSelection.view.Main", {
    extend: 'Ext.Panel',
    requires:['Ext.form.field.TextArea','Ext.resizer.Splitter'],
    alias:'widget.main',
    title:'How to get Text Selection from a text input',
    layout:'vbox',    
    initComponent:function(){    	
    	this.items = [
	    	{
	    		xtype:'textarea',
	    		width:'100%',
	    		emptyText:'Enter some text here, select some part of it and click on \'Get selected Text\' button at the bottom ',
	    		flex:1
	    	},
	    	{
	    		xtype:'splitter'
	    	},    	
	    	{
	    		xtype:'panel',
	    		border:0,
	    		flex:.5,
	    		width:'100%',
	    		layout:'fit',
	    		title:'Your text selection',
	    		fbar: [
	    			{
	    				type:'label',
	    				html:'<a href="http://www.twitter.com/goyalshubham13" target="_blank">@goyalshubham</a>',
	    				ui:'plain'
	    			},
					{ 
						xtype: 'button', 
						text: 'Get selected text',
						listeners:{
							click:this.getSelectedText
						} 
					}
				],
				items:[
					{
			    		xtype:'textarea',
			    		width:'100%',
			    		flex:1,
			    		readOnly:true,
			    		value:'Your selected text',		    		
			    	}
				]
	    	}
	    ]
	    this.callParent(arguments);
    },
    getSelectedText:function(button, event){
    	var resultTextArea = Ext.ComponentQuery.query('main panel textarea')[0];
    	var inputTextArea = Ext.ComponentQuery.query('main textarea')[0];
    	var selectedText;
    	var input = inputTextArea.inputEl.dom;		
		if (document.selection && document.selection.createRange) {
			input.selection = document.selection.createRange();
			selectedText = input.selection.text;		
		} else if (typeof input.selectionStart === 'number') {			
			selectedText = input.value.substring(input.selectionStart, input.selectionEnd);			
		}
		inputTextArea.focus();		
		resultTextArea.setValue(selectedText);
    }   
});
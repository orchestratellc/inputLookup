({
	searchByName: function(cmp) {
	        // clear search result info
		cmp.set('v.searchResults',[]);
	        cmp.set('v.hasResults',false);
	        
	        // get search params
		var objName = cmp.get('v.sObjName');    
	        var searchTerm = cmp.get('v.searchTerm');     
	
	        // controller action
		var action = cmp.get("c.getSObjectList");
	        action.setParams({
	            sObjectType: objName,
	            searchTerm: searchTerm
	        });
	        action.setCallback(this, function(response) {       
	            if (response.getState() === "SUCCESS") {
	                cmp.set('v.hasResults',true);
	                cmp.set('v.searchResults',response.getReturnValue());                	             
	            }
	        });
	        
	        $A.enqueueAction(action);
	},
	searchById: function(cmp) {
	        cmp.set('v.hasResults',false);
	        
		var objName = cmp.get('v.sObjName');    
	        var searchId = cmp.get('v.value');    
	
	        // controller action
		var action = cmp.get("c.getSObject");
	        action.setParams({
	            sObjectType: objName,
	            searchId: searchId
	        });
	        
	        action.setCallback(this, function(response){          
	            var state = response.getState();
	
				// if we have a result, set the component attribute values           
	            if (state === "SUCCESS" && response.getReturnValue() 
	                	&& response.getReturnValue()[0].id!=='error') {
	                var sObj = response.getReturnValue()[0];
	                cmp.set('v.searchTerm',sObj.name);             
	            }
	        });
	        
	        $A.enqueueAction(action);
	},    
	    setResultsInfo: function(cmp,event) {
	        // set search term and id, reset results 
	        var el = event.getSource().getElements()[0];
	        
	        // clear results 
    		cmp.set('v.hasResults',false);
	            
	        // add parameters to name and id fields
    		cmp.set('v.searchTerm',el.text);    
    		cmp.set('v.value',el.title);          
	    }
})

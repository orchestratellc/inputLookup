({
    doInit: function(cmp,event,helper) {
        // get name for passed-in lookup id (optional attribute) if we don't have a name
        var cId = cmp.get('v.value');
        if (cId) {
            helper.searchById(cmp);
        }
    },
    handleIdInput: function(cmp) {
        var cId = cmp.get('v.value');
        var cName = cmp.get('v.searchTerm');
      
        if (cId && !cName) {
            helper.searchById(cmp);
        }        
    },
    handleSearchChange : function(cmp, event, helper) {
        if (cmp.get('v.searchTerm') && cmp.get('v.searchTerm').length>1)
	    helper.searchByName(cmp);
	},
    handleResultSelect: function(cmp,event,helper) {
	helper.setResultsInfo(cmp,event);         
    }
})

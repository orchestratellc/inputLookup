public class InputLookupCtrl {
	
	@AuraEnabled
	public static List<AuraObject> getSObjectList(String sObjectType,String searchTerm) {
		List<AuraObject> auraObjs = new List<AuraObject>();
		try {
			List<sObject> objs = Database.query('Select Id,Name From '+String.escapeSingleQuotes(sObjectType)+
											' Where Name Like \'%' + String.escapeSingleQuotes(searchTerm) + '%\''+
											' Limit 5');
		        for (sObject s : objs) {
		            auraObjs.add(new AuraObject(s));
		        }
		} catch (Exception e) {}
		
		return auraObjs;
	}

	@AuraEnabled
	public static List<AuraObject> getSObject(String sObjectType,String searchId) {
		List<AuraObject> auraObjs = new List<AuraObject>();
		try {
			List<sObject> objs = Database.query('Select Id,Name From '+String.escapeSingleQuotes(sObjectType)+
											' Where Id = \'' + String.escapeSingleQuotes(searchId) + '\''+
											' Limit 1');
		        for (sObject s : objs) {
		            auraObjs.add(new AuraObject(s));
		        }
		} catch (Exception e) {
		    auraObjs.add(new AuraObject('error',e.getMessage()+'; '+e.getStackTraceString()));
		}
		
		return auraObjs;
	}    	
    
	public class AuraObject {
		@AuraEnabled public String id {get;set;}
		@AuraEnabled public String name {get;set;} 
		
		public AuraObject(sObject obj) {
		    this.id = (String)obj.get('Id');
		    this.name = (String)obj.get('Name');            
		}
		
		public AuraObject(String id,String name) {
		    this.id = id;
		    this.name = name;            
		}        
	}
}


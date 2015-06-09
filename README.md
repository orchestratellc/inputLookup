# inputLookup 
## Salesforce Lightning Component

For dynamic sObject lookup in custom Salesforce1 and Lightning mobile applications. 

### Usage: 

- Required: Object Label (sObjLabel) and Object Name (sObjName)
- Optional: Id of the record (value)

#### Standard Objects
```
<nameSpace:inputLookup sObjLabel="Contact" sObjName="Contact" value="{!v.contactId}"/>
```
#### Custom Objects
```
<nameSpace:inputLookup sObjLabel="Custom Object" sObjName="Custom_Object__c" value="{!v.customObjectRecordId}"/>
```

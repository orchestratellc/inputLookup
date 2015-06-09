# inputLookup 
## Salesforce Lightning Component

The Lightning Component Lookup Field. For dynamic sObject record lookup in custom Salesforce1 and Lightning mobile applications. Uses native Lightning Component and Apex functionality with no third-party dependencies. 

### Usage: 

- Required attributes: Object Label (sObjLabel) and Object Name (sObjName)
- Optional attributes: Id of the record (value)

#### Standard Objects
```
<nameSpace:inputLookup sObjLabel="Contact" sObjName="Contact" value="{!v.contactId}"/>
```
#### Custom Objects
```
<nameSpace:inputLookup sObjLabel="Custom Object" sObjName="Custom_Object__c" value="{!v.customObjectRecordId}"/>
```

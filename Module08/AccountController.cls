public with sharing class AccountController {
    public AccountController() {

    }
    @AuraEnabled(cacheable =true)
    public static List<Account> findAccount(String searchKey){
        try {
            searchKey = '%' + searchKey + '%';
            return [select id,name from Account where name like : searchKey];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String accountId){
        try {
            return [
            SELECT Id, Name,Account.Name
            FROM Contact
            WHERE accountId =: accountId
            LIMIT 10
        ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

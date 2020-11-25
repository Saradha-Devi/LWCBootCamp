import { api, LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import OPP_OBJECT from '@salesforce/schema/Opportunity';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

import CONTACT_FNAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LNAME from '@salesforce/schema/Contact.LastName'; 
//import CONTACT_ACCOUNT from '@salesforce/schema/Contact.Account';
import CONTACT_SALUTATION from '@salesforce/schema/Contact.Salutation';

import OPP_NAME from '@salesforce/schema/Opportunity.Name';
//import OPP_ACCOUNT from '@salesforce/schema/Opportunity.Account'; 
import OPP_CLOSEDATE from '@salesforce/schema/Opportunity.CloseDate';
import OPP_STAGE from '@salesforce/schema/Opportunity.StageName';

export default class LdsExample extends LightningElement {
    @api objectApiName = ACCOUNT_OBJECT;
    @api objectApiContactName = CONTACT_OBJECT;
    @api objectApiOppName = OPP_OBJECT;
    @api recordId;

    accNameField = NAME_FIELD;
    accRevenueField = REVENUE_FIELD;
    myFields = [NAME_FIELD, REVENUE_FIELD];

    myContactFields = [CONTACT_FNAME, CONTACT_LNAME,CONTACT_SALUTATION];
    contactFName = CONTACT_FNAME;
    contactLName = CONTACT_LNAME;
    contactSalutation = CONTACT_SALUTATION;

    myOppFields = [OPP_NAME,OPP_CLOSEDATE,OPP_STAGE];
    oppName = OPP_NAME;
    oppCloseDate = OPP_CLOSEDATE;
    oppStage = OPP_STAGE;

    showPic = false;
    picLabel = 'Show All';

    
    handleEventChange(event){
        if(this.showPic){
            this.showPic = false;
            this.picLabel = 'Show All';
        }else{
            this.showPic = true;
            this.picLabel = 'Show Less';
        }
    }
    handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;
        this.template.querySelector('lightning-record-form').submit(fields);
        
     }
     handleSuccess(event){
        this.handleReset();
     }
     handleReset(){
         const inputFields = this.template.querySelectorAll('lightning-input-field');
         if(inputFields){
            inputFields.forEach(field=>{
                field.reset();
            })
         }
     }
}
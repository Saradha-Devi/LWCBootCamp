import { LightningElement, wire, track } from 'lwc';
import findAccounts from "@salesforce/apex/AccountController.findAccount";
import getContactList from '@salesforce/apex/AccountController.getContactList';

/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;
const columns = [
    { label: 'Id', fieldName: 'Id', hideDefaultActions: true },
    { label: 'Name', fieldName: 'Name', hideDefaultActions: true },
];
export default class ApexDemo extends LightningElement {
    @track contacts;
    @track error;
    searchKey = 'xyz123';
    chosenAccount = '';
    @wire(findAccounts, { searchKey: '$searchKey' })
    accounts;
    chosenAccountName = '';
    columns = columns;

    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        console.log('value' + event.target.value)
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
    getContactForAccounts(event) {
        console.log('tadaa' + event.target.dataset.label)
        this.chosenAccount = event.target.dataset.label;
        this.chosenAccountName = event.target.dataset.name;
        console.log('Tadaa' + this.chosenAccountName);
        this.handleLoad();
    }


    handleLoad() {
        console.log('Tadaa')
        getContactList({
            accountId: this.chosenAccount
        })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    resetSearch() {
        try {
            console.log('in')
            this.searchKey = '  ';
            this.chosenAccount = '';
            this.chosenAccountName = '';
            this.contacts = undefined;
            this.accounts = undefined;
            console.log('out')
        } catch (e) {
            console.log(e);
        }

    }
}
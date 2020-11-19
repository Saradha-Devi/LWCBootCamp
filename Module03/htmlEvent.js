import { LightningElement,api } from 'lwc';
import Tom from '@salesforce/resourceUrl/Tom';
import Jerry from '@salesforce/resourceUrl/Jerry';

export default class HtmlEvent extends LightningElement {
   
     Tom = Tom;
     Jerry = Jerry;
    showPic = false;
    picLabel = 'Show Jerry';

    
    handleEventChange(event){
        if(this.showPic){
            this.showPic = false;
            this.picLabel = 'Show Jerry';
        }else{
            this.showPic = true;
            this.picLabel = 'Show Tom';
        }
    }
}
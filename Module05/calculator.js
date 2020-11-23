import { LightningElement, api, track } from 'lwc';

export default class Calculator extends LightningElement {
    @api nameVal = 'Child Tadaa ';
    @api yourExpression='';
    @api yourResult;
    @api equalsFlag = false;
    @api totVal ='';
    @api totVal1 ='';
    @api expression;
    @api needCalc =false;
    @api lastOperator ='';
    doCalc(event) {
        try {
            const clickedVal = event.target.label;
            console.log('Tadaa ' + clickedVal)
            if (clickedVal == "=") {
                if(this.lastOperator == '+'){
                    this.yourResult = Number(this.totVal) + Number(this.totVal1);
                }else if(this.lastOperator == '-'){
                    this.yourResult = Number(this.totVal) - Number(this.totVal1);
                }else if(this.lastOperator == '*'){
                    this.yourResult = Number(this.totVal) * Number(this.totVal1);
                }else if(this.lastOperator == '/'){
                    this.yourResult = Number(this.totVal) / Number(this.totVal1);
                }

                this.equalsFlag = true;
                //this.yourExpression = '';
                //this.yourResult = '';
                this.totVal = '';
                this.totVal1 = '';
                this.needCalc = false;
                this.lastOperator = '';
            } else if (clickedVal == 'CLR') {
                this.yourExpression = '';
                this.yourResult = '';
                this.totVal = '';
                this.totVal1 = '';
                this.needCalc = false;
                this.lastOperator = '';
            } else if (clickedVal == '+' || clickedVal == '-' || clickedVal == '/' || clickedVal == '*') {
                if(this.needCalc == true){
                    if(this.lastOperator == '+'){
                        this.yourResult = Number(this.totVal) + Number(this.totVal1);
                    }else if(this.lastOperator == '-'){
                        this.yourResult = Number(this.totVal) - Number(this.totVal1);
                    }else if(this.lastOperator == '*'){
                        this.yourResult = Number(this.totVal) * Number(this.totVal1);
                    }else if(this.lastOperator == '/'){
                        this.yourResult = Number(this.totVal) / Number(this.totVal1);
                    }
                    this.totVal = this.yourResult.toString();
                    this.totVal1 = '';
                }
                this.yourExpression = this.yourExpression + clickedVal.toString();
                this.needCalc = true;
                this.lastOperator = clickedVal;
            } else {
                if (this.equalsFlag) {
                    this.yourExpression = '';
                    this.yourResult = '';
                    this.totVal ='';
                    this.totVal1 = '';
                    this.needCalc = false;
                    this.lastOperator = '';

                    this.equalsFlag = false;
                }
                if(this.needCalc == true){
                    this.totVal1 = this.totVal1+clickedVal.toString();
                }else{
                    this.totVal =  this.totVal+clickedVal.toString();
                }
                this.yourExpression = this.yourExpression + clickedVal.toString();
                console.log('yourExpression+clickedVal.toString()' + this.yourExpression);
                
            }
        } catch (e) {
            console.log(e);
        }
    }
}
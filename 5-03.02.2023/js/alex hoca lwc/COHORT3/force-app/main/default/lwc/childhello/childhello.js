import { LightningElement,api } from 'lwc';

export default class Childhello extends LightningElement {
    @api titletext;
    @api footertext;
    @api changetitle(){
        console.log('changetitle runs...');
        this.titletext='method run!!!';
    }
}
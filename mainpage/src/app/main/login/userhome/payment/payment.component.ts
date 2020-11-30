import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tranhistory } from 'src/app/tranhistory';

class Product{
  name: string;
  price: number;
  qty: number;
}
class Invoice{
  customerName: string;
  address: string;
  contactNo: number;
  email: string;
  
  products: Product[] = [];
  additionalDetails: string;
 
  constructor(){
    // Initially one empty product row we will show 
    this.products.push(new Product());
  }
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  id:number;
  name;
emailid;
phonenumber;
plansid;
price;
msg;
validity;
data;
tran=new Tranhistory();
   constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { 
     this.id=_service.id;
    this.tran.price=this._service.data;
    this.name=_service.username;
    this.emailid=_service.emailId;
this.phonenumber=_service.phonenumber;
this.plansid=_service.plansid;
 this.price=this._service.price;
 this.validity=this._service.validity;
 this.data=this._service.data;
 const a=_service.price;
 this.tran.price=a;

 console.log("last"+this.tran.price);

}


  ngOnInit(): void {
  }
  invoice = new Invoice(); 
  
  generatePDF(action = 'open') {
    let docDefinition = {
      content: [
        {
          text: 'VOIZFONICA',
          fontSize: 16,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: 'skyblue'
        },
        {
          text: 'Customer Details',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.invoice.customerName,
                bold:true
              },
              { text: this.invoice.address },
              { text: this.invoice.email },
              { text: this.invoice.contactNo }
            ],
            [
              {
                text: `Date: ${new Date().toLocaleString()}`,
                alignment: 'right'
              },
              { 
                text: `Bill No : ${((Math.random() *1000).toFixed(0))}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Transaction Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              ['Plan', 'Price', 'Quantity', 'Amount'],
              ...this.invoice.products.map(p => ([p.name, p.price, p.qty, (p.price*p.qty).toFixed(2)])),
              [{text: 'Total Amount', colSpan: 3}, {}, {}, this.invoice.products.reduce((sum, p)=> sum + (p.qty * p.price), 0).toFixed(2)]
            ]
          }
        },
   
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              'Recharge is done within 1 hour.',
              'If recharge is unsuccessful then with this bill only one can question VoizFonica',
              'This is system generated invoice.',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

    if(action==='download'){
      pdfMake.createPdf(docDefinition).download();
    }else if(action === 'print'){
      pdfMake.createPdf(docDefinition).print();      
    }else{
      pdfMake.createPdf(docDefinition).open();      
    }

  }

  addProduct(){
    this.invoice.products.push(new Product());
  }
  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/login/login.component';
import { RegistrationComponent } from './main/registration/registration.component';
import { MainComponent } from './main/main.component';
import { AdminloginComponent } from './main/adminpage/adminlogin/adminlogin.component';
import { UserhomeComponent } from './main/login/userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateuserComponent } from './main/adminpage/createuser/createuser.component';
import { DisplayuserComponent } from './main/adminpage/displayuser/displayuser.component';
import { UpdateuserComponent } from './main/adminpage/updateuser/updateuser.component';

import { DeleteuserComponent } from './main/adminpage/deleteuser/deleteuser.component';

import { AdminpageComponent } from './main/adminpage/adminpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './main/login/forgotpassword/forgotpassword.component';

import { SettingsComponent } from './main/login/userhome/settings/settings.component';
import { HelpsupportComponent } from './main/login/userhome/helpsupport/helpsupport.component';

import { OffersComponent } from './main/login/userhome/offers/offers.component';
import { NotificationsComponent } from './main/login/userhome/notifications/notifications.component';
import { TranhistoryComponent } from './main/login/userhome/tranhistory/tranhistory.component';
import { UserinfoComponent } from './main/login/userhome/userinfo/userinfo.component';
import { PlansComponent } from './main/login/userhome/plans/plans.component';
import { PrepaidplansComponent } from './main/login/userhome/plans/prepaidplans/prepaidplans.component';
import { PostpaidplansComponent } from './main/login/userhome/plans/postpaidplans/postpaidplans.component';
import { DongleplansComponent } from './main/login/userhome/plans/dongleplans/dongleplans.component';
import { PaymentComponent } from './main/login/userhome/payment/payment.component';
import { CreateplanComponent } from './main/adminpage/createplan/createplan.component';
import { UpdateplanComponent } from './main/adminpage/updateplan/updateplan.component';
import { DeleteplanComponent } from './main/adminpage/deleteplan/deleteplan.component';
import { CreatepostplanComponent } from './main/adminpage/createplan/createpostplan/createpostplan.component';
import { CreatepreplanComponent } from './main/adminpage/createplan/createpreplan/createpreplan.component';
import { CreatedongleplanComponent } from './main/adminpage/createplan/createdongleplan/createdongleplan.component';
import { UppreplanComponent } from './main/adminpage/updateplan/uppreplan/uppreplan.component';
import { UppostplanComponent } from './main/adminpage/updateplan/uppostplan/uppostplan.component';
import { UpdongplanComponent } from './main/adminpage/updateplan/updongplan/updongplan.component';
import { DelpreplanComponent } from './main/adminpage/deleteplan/delpreplan/delpreplan.component';
import { DelpostplanComponent } from './main/adminpage/deleteplan/delpostplan/delpostplan.component';
import { DeldongplanComponent } from './main/adminpage/deleteplan/deldongplan/deldongplan.component';
import { LivechatComponent } from './main/login/userhome/helpsupport/livechat/livechat.component';
import { FAQComponent } from './main/login/userhome/helpsupport/faq/faq.component';
import { LivechatadminComponent } from './main/adminpage/livechatadmin/livechatadmin.component';
import { CreateofferComponent } from './main/adminpage/createoffer/createoffer.component';
import { UpdateofferComponent } from './main/adminpage/updateoffer/updateoffer.component';
import { DeleteofferComponent } from './main/adminpage/deleteoffer/deleteoffer.component';
import { PaymentportalComponent } from './main/login/userhome/paymentportal/paymentportal.component';
import { PostpaidpageComponent } from './main/login/userhome/postpaidpage/postpaidpage.component';
import { PrepaidpageComponent } from './main/login/userhome/prepaidpage/prepaidpage.component';
import { DonglepageComponent } from './main/login/userhome/donglepage/donglepage.component';
import { AdmindisplayComponent } from './main/adminpage/admindisplay/admindisplay.component';
import { UserhomedisplayComponent } from './main/login/userhome/userhomedisplay/userhomedisplay.component';
import { Paymentportal1Component } from './main/login/userhome/paymentportal1/paymentportal1.component';
import { OfferspaymentComponent } from './main/login/userhome/offerspayment/offerspayment.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    AdminloginComponent,
    CreateuserComponent,
    DisplayuserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    
    AdminpageComponent,
    UserhomeComponent,
    ForgotpasswordComponent,
    PaymentComponent,
    SettingsComponent,
    HelpsupportComponent,
    PlansComponent,
    OffersComponent,
    NotificationsComponent,
    TranhistoryComponent,
    UserinfoComponent,
    PrepaidplansComponent,
    PostpaidplansComponent,
    DongleplansComponent,
    PaymentComponent,
    CreateplanComponent,
    UpdateplanComponent,
    DeleteplanComponent,
    CreatepostplanComponent,
    CreatepreplanComponent,
    CreatedongleplanComponent,
    UppreplanComponent,
    UppostplanComponent,
    UpdongplanComponent,
    DelpreplanComponent,
    DelpostplanComponent,
    DeldongplanComponent,
    LivechatComponent,
    FAQComponent,
    LivechatadminComponent,
    CreateofferComponent,
    UpdateofferComponent,
    DeleteofferComponent,
    PaymentportalComponent,
    PostpaidpageComponent,
    PrepaidpageComponent,
    DonglepageComponent,
    AdmindisplayComponent,
    UserhomedisplayComponent,
    Paymentportal1Component,
    OfferspaymentComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindisplayComponent } from './main/adminpage/admindisplay/admindisplay.component';


import { AdminloginComponent } from './main/adminpage/adminlogin/adminlogin.component';

import { AdminpageComponent } from './main/adminpage/adminpage.component';
import { CreateofferComponent } from './main/adminpage/createoffer/createoffer.component';
import { CreatedongleplanComponent } from './main/adminpage/createplan/createdongleplan/createdongleplan.component';
import { CreateplanComponent } from './main/adminpage/createplan/createplan.component';
import { CreatepostplanComponent } from './main/adminpage/createplan/createpostplan/createpostplan.component';
import { CreatepreplanComponent } from './main/adminpage/createplan/createpreplan/createpreplan.component';
import { CreateuserComponent } from './main/adminpage/createuser/createuser.component';
import { DeleteofferComponent } from './main/adminpage/deleteoffer/deleteoffer.component';
import { DeldongplanComponent } from './main/adminpage/deleteplan/deldongplan/deldongplan.component';
import { DeleteplanComponent } from './main/adminpage/deleteplan/deleteplan.component';
import { DelpostplanComponent } from './main/adminpage/deleteplan/delpostplan/delpostplan.component';
import { DelpreplanComponent } from './main/adminpage/deleteplan/delpreplan/delpreplan.component';
import { DeleteuserComponent } from './main/adminpage/deleteuser/deleteuser.component';



import { DisplayuserComponent } from './main/adminpage/displayuser/displayuser.component';
import { LivechatadminComponent } from './main/adminpage/livechatadmin/livechatadmin.component';
import { UpdateofferComponent } from './main/adminpage/updateoffer/updateoffer.component';
import { UpdateplanComponent } from './main/adminpage/updateplan/updateplan.component';
import { UpdongplanComponent } from './main/adminpage/updateplan/updongplan/updongplan.component';
import { UppostplanComponent } from './main/adminpage/updateplan/uppostplan/uppostplan.component';
import { UppreplanComponent } from './main/adminpage/updateplan/uppreplan/uppreplan.component';
import { UpdateuserComponent } from './main/adminpage/updateuser/updateuser.component';
import { ForgotpasswordComponent } from './main/login/forgotpassword/forgotpassword.component';
import { LoginComponent } from './main/login/login.component';
import { DonglepageComponent } from './main/login/userhome/donglepage/donglepage.component';
import { FAQComponent } from './main/login/userhome/helpsupport/faq/faq.component';
import { HelpsupportComponent } from './main/login/userhome/helpsupport/helpsupport.component';
import { LivechatComponent } from './main/login/userhome/helpsupport/livechat/livechat.component';
import { NotificationsComponent } from './main/login/userhome/notifications/notifications.component';
import { OffersComponent } from './main/login/userhome/offers/offers.component';
import { OfferspaymentComponent } from './main/login/userhome/offerspayment/offerspayment.component';
import { PaymentComponent } from './main/login/userhome/payment/payment.component';
import { PaymentportalComponent } from './main/login/userhome/paymentportal/paymentportal.component';
import { Paymentportal1Component } from './main/login/userhome/paymentportal1/paymentportal1.component';
import { DongleplansComponent } from './main/login/userhome/plans/dongleplans/dongleplans.component';
import { PlansComponent } from './main/login/userhome/plans/plans.component';
import { PostpaidplansComponent } from './main/login/userhome/plans/postpaidplans/postpaidplans.component';
import { PrepaidplansComponent } from './main/login/userhome/plans/prepaidplans/prepaidplans.component';
import { PostpaidpageComponent } from './main/login/userhome/postpaidpage/postpaidpage.component';
import { PrepaidpageComponent } from './main/login/userhome/prepaidpage/prepaidpage.component';

import { SettingsComponent } from './main/login/userhome/settings/settings.component';
import { TranhistoryComponent } from './main/login/userhome/tranhistory/tranhistory.component';
import { UserhomeComponent } from './main/login/userhome/userhome.component';
import { UserhomedisplayComponent } from './main/login/userhome/userhomedisplay/userhomedisplay.component';
import { UserinfoComponent } from './main/login/userhome/userinfo/userinfo.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './main/registration/registration.component';



const routes: Routes = 
[
  {path:'',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'adminlogin/:name',component:AdmindisplayComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'main',component:MainComponent},
  {path:'deleteuser/:name',component:DeleteuserComponent},
  {path:'createuser/:name',component:CreateuserComponent},
  {path:'displayuser/:name',component:DisplayuserComponent},
  {path:'updateuser/:name',component:UpdateuserComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'userhome',component:UserhomedisplayComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'userinfo/:id',component:UserinfoComponent},
  {path:'offers/:id',component:OffersComponent},
  {path:'plans/:id',component:PlansComponent},
  {path:'settings',component:SettingsComponent},
  {path:'tranhistory/:id',component:TranhistoryComponent},
  {path:'helpsupport/:id',component:HelpsupportComponent},
  {path:'notifications/:id',component:NotificationsComponent},
  {path:'prepaidplans/:id',component:PrepaidplansComponent},
  {path:'postpaidplans/:id',component:PostpaidplansComponent},
  {path:'dongleplans/:id',component:DongleplansComponent},
  {path:'payment/:id/:plansid',component:PaymentComponent},
  {path:'offerspayment/:id/:plansid',component:OfferspaymentComponent},
  {path:'createplan/:name',component:CreateplanComponent},
  {path:'createpreplan/:name',component:CreatepreplanComponent},
  {path:'createpostplan/:name',component:CreatepostplanComponent},
  {path:'createdongleplan/:name',component:CreatedongleplanComponent},
  {path:'updateplan/:name',component:UpdateplanComponent},
  {path:'uppreplan/:name',component:UppreplanComponent},
  {path:'uppostplan/:name',component:UppostplanComponent},
  {path:'updongplan/:name',component:UpdongplanComponent},
  {path:'delpreplan/:name',component:DelpreplanComponent},
  {path:'delpostplan/:name',component:DelpostplanComponent},
  {path:'deldongplan/:name',component:DeldongplanComponent},
  {path:'deleteplan/:name',component:DeleteplanComponent},
  {path:'faq/:id',component:FAQComponent},
  {path:'livechat',component:LivechatComponent},
  {path:'livechatadmin',component:LivechatadminComponent},
  {path:'createoffer/:name',component:CreateofferComponent},
  {path:'updateoffer/:name',component:UpdateofferComponent},
  {path:'deleteoffer/:name',component:DeleteofferComponent},
  {path:'paymentportal/:id/:plansid',component:PaymentportalComponent},
  {path:'paymentportal1/:id/:offersid',component:Paymentportal1Component},
  {path:'postpaidpage/:id',component:PostpaidpageComponent},
  {path:'prepaidpage/:id',component:PrepaidpageComponent},
  {path:'donglepage/:id',component:DonglepageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

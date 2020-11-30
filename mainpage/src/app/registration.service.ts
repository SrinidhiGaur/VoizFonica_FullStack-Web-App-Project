import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import { User } from './user';
import { Admin } from './admin';
import { Plans } from './plans';
import { Offers } from './offers';
import { Tranhistory } from './tranhistory';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http:HttpClient) { }
adminname='';
username='';
id;
emailId;
phonenumber;
plansid;
price;
validity;
data;
offersid;
offers; description; postid;
  public loginUserFromRemote(user:User):Observable<any>{
return this._http.post<any>("http://localhost:4322/login", user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:4322/registeruser", user)
      }
      public createuserplanFromRemote(plan:Plans):Observable<any>{
        return this._http.post<any>("http://localhost:4322/createuserpreplan", plan)
          }
          public createuserpostplanFromRemote(plan:Plans):Observable<any>{
            return this._http.post<any>("http://localhost:4322/createuserpostplan", plan)
              }
              public createuserdplanFromRemote(plan:Plans):Observable<any>{
                return this._http.post<any>("http://localhost:4322/createuserdplan", plan)
                  }
                  public  transcationsFromRemote(tran:Tranhistory):Observable<any>{
                    return this._http.post<any>("http://localhost:4322/transcations", tran)
                      }

                      
              public fetchpreplanByIdFromRemote(id3:number):Observable<any>
              {
                return this._http.get<any>("http://localhost:4322/preplan/"+id3)
                  }

                  public fetchoffersByIdFromRemote(id3:number):Observable<any>
                  {
                    return this._http.get<any>("http://localhost:4322/offers/"+id3)
                      }

                  public fetchpostplanByIdFromRemote(id3:number):Observable<any>
                  {
                    return this._http.get<any>("http://localhost:4322/postplan/"+id3)
                      }
                      public fetchdongleplanByIdFromRemote(id3:number):Observable<any>
                      {
                        return this._http.get<any>("http://localhost:4322/dongleplan/"+id3)
                          }
     fetchuserListFromRemote():Observable<any>{
        return this._http.get<any>("http://localhost:4322/displayuserall");
          }

          public fetchUserById(id3:number):Observable<any>
          {
            return this._http.get<any>("http://localhost:4322/displayuser/"+id3)
              }

              public deleteUserByIdFromRemote(id1:number,user:User):Observable<any>{
                return this._http.delete<any>("http://localhost:4322/deleteuser/"+id1)
                  } 

                  public deleteUserdplanByIdFromRemote(id1:number,plan:Plans):Observable<any>{
                    return this._http.delete<any>("http://localhost:4322/deleteuserdplan/"+id1)
                      }
                      public deleteUserofferByIdFromRemote(id1:number,offer:Offers):Observable<any>{
                        return this._http.delete<any>("http://localhost:4322/deleteuseroffer/"+id1)
                          }
                          
                  public deleteUserpostplanByIdFromRemote(id1:number,plan:Plans):Observable<any>{
                    return this._http.delete<any>("http://localhost:4322/deleteuserpostplan/"+id1)
                      }
                      public deleteUserplanByIdFromRemote(id1:number,plan:Plans):Observable<any>{
                        return this._http.delete<any>("http://localhost:4322/deleteuserplan/"+id1)
                          }
                          public fetchuserOffersFromRemote():Observable<any>{
                            return this._http.get<any>("http://localhost:4322/displayuseroffers")
                              }  
                              public fetchUserByIdforinfoFromRemote(id1:number):Observable<any>{
                                return this._http.get<any>("http://localhost:4322/userinfo/"+id1)
                                  } 
                  public UpdateUserFromRemote(id:number,user:User):Observable<any>{
                    return this._http.put<any>("http://localhost:4322/updateuser/"+id, user)
                      } 

                      public UpdateUserofferFromRemote(id:number,offer:Offers):Observable<any>{
                        return this._http.put<any>("http://localhost:4322/updateuseroffer/"+id, offer)
                          }

                      public  createuseroffersFromRemote(offer:Offers):Observable<any>{
                        return this._http.post<any>("http://localhost:4322/createuseroffers",offer)
                          } 
    

                      public UpdateUserplanFromRemote( id:number, plans:Plans):Observable<any>{
                        return this._http.put<any>("http://localhost:4322/updateuserplan/"+id, plans)
                          } 
                          public UpdateUserpostplanFromRemote( id:number, plans:Plans):Observable<any>{
                            return this._http.put<any>("http://localhost:4322/updateuserpostplan/"+id, plans)
                              } 
                              public UpdateUserdplanFromRemote( id:number, plans:Plans):Observable<any>{
                                return this._http.put<any>("http://localhost:4322/updateuserdplan/"+id, plans)
                                  } 
                      
                      public adminLoginFromRemote(admin:Admin):Observable<any>{
                        return this._http.post<any>("http://localhost:4322/adminlogin",admin)
                            }

                            public UpUserServiceTypeFromRemote( id:number, user :User):Observable<any>{
                              return this._http.put<any>("http://localhost:4322/switchtopost/"+id,user)
                                } 

}

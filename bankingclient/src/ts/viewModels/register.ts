import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-password';
import "oj-c/input-number";
import "ojs/ojdatetimepicker";
import 'oj-c/form-layout';
import "oj-c/button";
import "ojs/ojprogress-bar";
import 'oj-c/list-item-layout';
import 'oj-c/list-view';
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import 'ojs/ojtable';
import ko = require("knockout");
class RegisterViewModel {
    url="http://localhost:8080/customers/"
    first_name: ko.Observable<string> | ko.Observable<any>
    last_name: ko.Observable<string> | ko.Observable<any>
    address_1: ko.Observable<string> | ko.Observable<any>
    address_2: ko.Observable<string> | ko.Observable<any>
    address_3: ko.Observable<string> | ko.Observable<any>
    city: ko.Observable<string> | ko.Observable<any>
    pincode: ko.Observable<string> | ko.Observable<any>
    state: ko.Observable<string> | ko.Observable<any>
    phone_number: ko.Observable<Number> | ko.Observable<any>
    password: ko.Observable<string> | ko.Observable<any>
    email: ko.Observable<string> | ko.Observable<any>
    userName: ko.Observable<string> | ko.Observable<any>
    
    constructor() {
         this.first_name=ko.observable(null)
         this.last_name=ko.observable(null)
         this.address_1=ko.observable(null)
         this.address_2=ko.observable(null)
         this.address_3=ko.observable(null)
         this.city=ko.observable(null)
         this.state=ko.observable(null)
         this.phone_number=ko.observable(null)
         this.password=ko.observable(null)
         this.pincode=ko.observable(null)
         this.email=ko.observable(null)
         this.userName=ko.observable(null)    
         
    }

    addCustomer= async () => {
        
         // Create row object based on form inputs
         const row = {
            first_name: this.first_name(),
            last_name: this.last_name(),
            address_1: this.address_1(),
           address_2: this.address_2(),
           address_3: this.address_3(),
           city: this.city(),
           pincode: this.pincode(),
           state: this.state(),
           phone_under: this.phone_number(),
           userName: this.userName(),
           password: this.password(),
           email:this.email()
           
          };
  
       // Create and send request to REST service to add row
       const request = new Request(this.url+"addnewcustomer", {
          headers: new Headers({
            "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(row),
          method: "POST",
        });
        const response = await fetch(request);
        const addedRow = await response.json();
        console.log(addedRow);
        if (addedRow!=null) {
            alert("Customer Resgistered Successfully, proceed to login")
            document.location.href="?ojr=login"

            
        }
    }
}
export = RegisterViewModel
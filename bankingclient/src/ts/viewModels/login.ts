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

class LoginViewModel {
    userName: ko.Observable<any> | ko.Observable<string>
    password: ko.Observable<any> | ko.Observable<string>
    url="http://localhost:8080/customers/"
    message: ko.Observable<any> | ko.Observable<string>
    constructor() {
        this.userName=ko.observable(null)
        this.password=ko.observable(null)
        this.message=ko.observable(null)    
    }

    userLogin=async () => {
        const row={
            userName: this.userName(),
            password: this.password()
        }
        const request = new Request(this.url+"login", {
            headers: new Headers({
              "Content-type": "application/json; charset=UTF-8",
            }),
            body: JSON.stringify(row),
            method: "POST",
          });
          const response = await fetch(request);
          const data = await response.json();
          console.log(data.no_of_attempts);
          let message
          if (data.status=="Blocked") {
            message="Your Account is Blocked"
        }
        else if (data.no_of_attempts!=0) {
            message="Wrong Password, attempts = "+data.no_of_attempts
        }
        else if (data.userName=="Invalid") {
            message="Invalid Username"
           }
        else if (data.no_of_attempts==0) {
            message="Login Successfull"
            localStorage.setItem("loginData", JSON.stringify(data))
            window.location.href="?ojr=dashboard"
        }
    //    alert(message)
       this.message(message)
    }
}
export= LoginViewModel
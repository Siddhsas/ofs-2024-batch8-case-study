/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
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
import 'my-component/loader'
import ko = require("knockout");
   
   
let loginData=(localStorage.getItem('loginData'));
if (loginData) {
   const data= JSON.parse(loginData)
  console.log(data.first_name);  
}
class DashboardViewModel {
  userName: ko.Observable<String> | ko.Observable<any>
  
  constructor() {
    this.userName= ko.observable(null)
  }
  logout=async () => {
    localStorage.clear()
    window.location.href="/?ojr=login"
  }

 







  connected(): void {
    AccUtils.announce("Dashboard page loaded.");
    document.title = "Dashboard";
    // implement further logic if needed
  }

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
  disconnected(): void {
    // implement if needed
  }

  /**
   * Optional ViewModel method invoked after transition to the new View is complete.
   * That includes any possible animation between the old and the new View.
   */
  transitionCompleted(): void {
    // implement if needed
  }
}

export = DashboardViewModel;

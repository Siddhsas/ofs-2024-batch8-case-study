/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import "oj-c/input-text";
import "ojs/ojknockout";
import 'oj-c/input-password';
import "oj-c/input-number";
import "ojs/ojdatetimepicker";
import 'oj-c/form-layout';
import "oj-c/button";
class DashboardViewModel {
  firstName: ko.Observable<any> | ko.Observable<number>;
  salary: ko.Observable<any> | ko.Observable<number>;
  password: ko.Observable<string> | ko.Observable<any>;
  date: ko.Observable<String>| ko.Observable<any>;
  activatedButton: ko.Observable<any> | ko.Observable<string>
  
    constructor() {
      this.firstName = ko.observable(null);
      this.salary=ko.observable(null);
      this.password=ko.observable(null);
      this.date=ko.observable(null);
      this.activatedButton= ko.observable("None")

    }

    public buttonAction = (event: Event) => {
      this.activatedButton((event.currentTarget as HTMLElement).id);
      return true;
    };

 
}

export = DashboardViewModel;

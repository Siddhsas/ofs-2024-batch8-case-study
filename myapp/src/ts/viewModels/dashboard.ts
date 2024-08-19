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
import "ojs/ojprogress-bar";
import 'oj-c/list-item-layout';
import 'oj-c/list-view';
import ArrayDataProvider = require('ojs/ojarraydataprovider');
class DashboardViewModel {
  firstName: ko.Observable<any> | ko.Observable<number>;
  salary: ko.Observable<any> | ko.Observable<number>;
  password: ko.Observable<string> | ko.Observable<any>;
  date: ko.Observable<String>| ko.Observable<any>;
  activatedButton: ko.Observable<any> | ko.Observable<string>
  Name: ko.Observable<any>
  userName: ko.Observable<any>
  email: ko.Observable<any>
  street: ko.Observable<any>
  suite: ko.Observable<any>
  private readonly step = ko.observable(0);
  
    constructor() {
      this.firstName = ko.observable(null);
      this.salary=ko.observable(null);
      this.password=ko.observable(null);
      this.date=ko.observable(null);
      this.activatedButton= ko.observable("None")
      this.Name=ko.observable(null)
      this.userName=ko.observable(null)
      this.email=ko.observable(null)
      this.street=ko.observable(null)
      this.suite=ko.observable(null)
    }

    public buttonAction = (event: Event) => {
      this.activatedButton((event.currentTarget as HTMLElement).id);
      return true;
    };
    
    public handleClick = (event:Event)=>{
      let elementName=(event.currentTarget as HTMLElement).id;
      alert("Alert Click On Button"+ elementName);
    }
    public callApi= async(event:Event)=>{

      let progress = document.getElementById('bar')
      let div=document.getElementById("details")
      if (div!=null) {
        div.hidden=true
      }
      if (progress!=null) {
        window.setInterval(() => {
          this.step((this.step() + 1) % 200);
        }, 30);
        progress.hidden=false
        let id= parseInt(this.firstName())
      let URL="https://jsonplaceholder.typicode.com/users/"+id;
      let res = await fetch(URL);
      let jasonData= await res.json()
      console.log(jasonData);
      if (jasonData!=null) {
        this.Name(jasonData.name)
        this.userName(jasonData.username)
        this.email(jasonData.email)
        this.street(jasonData.address.street)
        this.suite(jasonData.address.suite)
      }
      
        setTimeout(() => {
          if (div!=null) {
            div.hidden= false;
          }
          if (progress?.hidden==false) {
            progress.hidden=true;
          }
        }, 1500);
      }
      
    }
   
    readonly progressValue = ko.pureComputed(() => {
      return Math.min(this.step(), 100);
    });

    private readonly data = [
      {
        id: 1,
        name: 'Chris Black',
        title: 'Oracle Cloud Infrastructure GTM Channel Director EMEA',
      },
      {
        id: 2,
        name: 'Christine Cooper',
        title: 'Senior Principal Escalation Manager',            
      },
      {
        id: 3,
        name: 'Chris Benalamore',
        title: 'Area Business Operations Director EMEA & JAPAC',
       
      },
      {
        id: 4,
        name: 'Christopher Johnson',
        title: 'Vice-President HCM Application Development',
       
      },
      {
        id: 5,
        name: 'Samire Christian',
        title: 'Consulting Project Technical Manager',
       
      },
      {
        id: 6,
        name: 'Kurt Marchris',
        title: 'Customer Service Analyst',
   
      },
      {
        id: 7,
        name: 'Zelda Christian Cooperman',
        title: 'Senior Principal Escalation Manager',
      }
    ];

    readonly dataProvider = new ArrayDataProvider(this.data, {
      keyAttributes: 'value'
    });
 
}

export = DashboardViewModel;

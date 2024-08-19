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

type D = { id: number; name: string; email: string };
type K = D['id'];

class IncidentsViewModel {
 
  dataProvider: RESTDataProvider<K,D>;
  constructor() {
    this.dataProvider=new RESTDataProvider({
      keyAttributes:'id',
      url:'https://jsonplaceholder.typicode.com/users',
      transforms:{
        fetchFirst:{
          request:async(options)=>{
            const url = new URL(options.url);
              return new Request(url.href);
          },
          response: async({body})=>{
            console.log(body)
            let data= body;
            const totalSize=data.length
            const hasMore=false
            return {data};
          }
    }}});

  }
}

export = IncidentsViewModel;

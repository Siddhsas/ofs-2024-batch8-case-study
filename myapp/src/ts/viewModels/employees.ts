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
import { log } from "@oracle/oraclejet/ojlogger";

type D={id: number; name: string; salary:number;}
type K=D['id'];

class EmployeesViewModel {
    name: ko.Observable<any> | ko.Observable<string>
    id: ko.Observable<any> | ko.Observable<number>
    salary:ko.Observable<any> | ko.Observable<number>
    dataprovider: RESTDataProvider<K, D>;
    keyAttributes='id';
    url="http://localhost:8080/employees"
    isUpdate=false
    constructor() {
        this.id= ko.observable(null)
        this.name=ko.observable(null)
        this.salary=ko.observable(null)
        this.dataprovider = new RESTDataProvider({
            keyAttributes: this.keyAttributes,
            url: this.url,
            transforms: {
                fetchFirst: {
                    request: async (options) => {
                        const url = new URL(options.url);
                        return new Request(url.href);
                    },
                    response: async ({ body }) => {
                        const data = body;
                        console.log(data)
                        // If the response body returns, for example, "items". 
                        // We need to assign "items" to "data"
                        return { data };
                    },
                },
            },
        });
    }
     
    addRow = async () => {
        // Create row object based on form inputs
        const row = {
          id: this.id(),
          name: this.name(),
          salary: this.salary(),
        
        };

     // Create and send request to REST service to add row
     const request = new Request(this.url, {
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(row),
        method: "POST",
      });
      const response = await fetch(request);
      const addedRow = await response.json();
      console.log(addedRow);
      const addedRowIndex = addedRow.index;
    delete addedRow.index;
    const addedRowKey = addedRow[this.keyAttributes];
    const addedRowMetaData = { key: addedRowKey };
    this.dataprovider.mutate({
      add: {
        data: [addedRow],
        indexes: [addedRowIndex],
        keys: new Set([addedRowKey]),
        metadata: [addedRowMetaData],
      },
    });
    this.name(null)
    this.salary(null)
}

removeRow = async (event: Event) => {
  const target= event.target as HTMLHtmlElement |null
 
  if (target != null) {
    const row=target.getAttribute('data-row-info')
    console.log(row);
    // console.log(JSON.stringify(row));
    // Create and send request to delete row on REST server
    const request = new Request(
      `${this.url}/${row}`,
      { 
        method: "DELETE",
       }
    );
    const response = await fetch(request);
    const removedRow = await response.json();
    console.log(removedRow)
    const removedRowIndex = removedRow.index;
    delete removedRow.index;
    // Create remove mutate event and call mutate method
    // to notify dataprovider consumers that a row has been
    // removed
    const removedRowKey = removedRow[this.keyAttributes];
    const removedRowMetaData = { key: removedRowKey };
    this.dataprovider.mutate({
      remove: {
        data: [removedRow],
        indexes: [removedRowIndex],
        keys: new Set([removedRowKey]),
        metadata: [removedRowMetaData],
      },
    });

  }
  this.dataprovider.refresh()
}


updateHandler= async(event: Event)=>{
  const target=event.target as HTMLElement | null
  if(target != null){
    const id= target.getAttribute('data-row-id')
    const name= target.getAttribute('data-row-name')
    const salary= target.getAttribute('data-row-salary')
    
    if (id!=null && salary!= null && name!=null) {
      console.log(name + id + salary)
      this.id( parseInt(id));
      this.salary(parseInt(salary))
      this.name(name)
      this.isUpdate=true
    }
   
  }
        
}

submitData = async () => {
  if (this.isUpdate==true) {
    this.updateRow();
  }
  else{
    this.addRow();
  }

}


// used to update the fields based on the selected row
updateRow = async () => {

    // Create row object to update based on form inputs
    const row = {
      id: this.id(),
      name: this.name(),
      salary: this.salary(),
    
    };
    // Create and send request to update row on the REST service
    const request = new Request(
      `${this.url}`,
      {
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(row),
        method: "PUT",
      }
    );
    const response = await fetch(request);
    const updatedRow = await response.json();
    const updatedRowIndex = updatedRow.index;
    delete updatedRow.index;
    this.dataprovider.refresh()
    this.isUpdate=false
    this.name(null)
    this.salary(null)
    // Create update mutate event and call mutate method
    // to notify dataprovider consumers that a row has been
    // updated
    // const updatedRowKey = this.selectedKey;
    // const updatedRowMetaData = { key: updatedRowKey };
    // this.dataprovider.mutate({
    //   update: {
    //     data: [updatedRow],
    //     indexes: [updatedRowIndex],
    //     keys: new Set([updatedRowKey]),
    //     metadata: [updatedRowMetaData],
    //   },
    // });
  }
}



export = EmployeesViewModel



import { Component } from '@angular/core';
//Prueba para Git
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular - CRUD';

  msg: string = '';

  employees = [
    {
      name: 'Kevin',
      position: 'manager',
      email: 'keviinmoralees132@gmail.com'
    },
    {
      name: 'Martha',
      position: 'Designer',
      email: 'Martha@gmail.com'
    },
    {
      name: 'Pedro',
      position: 'Programmer',
      email: 'Pedro@gmail.com'
    }
  ];

  model:any = {};
  model2:any = {};
  hideUpdate: boolean = true;

  addEmployee(): void{
    this.employees.push(this.model);
    this.msg = 'Employee Agg';
    this.model = {};
  };
  
  deleteEmployee(i : number): void{
    var answer = confirm('Are you sure delete?')
    if(answer){
      this.employees.splice(i,1)
      this.msg = 'Employee deleted'
    }
  };

  myValue : any;
  editEmployee(i :number): void{
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  };
  updateEmployee(): void{
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j){
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg= 'Employee Update'
        this.hideUpdate = true;
      }
    }
  };
  alertClose(){
    this.msg='';
  }
}

import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {
 
  constructor(private router: Router, private _employee: EmployeeDataService) { }
  
 ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
    console.log(form);
    //why direct form.value.date not work here
    let date = new Date(form.value.Date).toDateString();
    console.log(date)
    this._employee.importData(form.value.EmployeeID,form.value.Name,form.value.Team,form.value.Designation,form.value.Gender,date)
    this.router.navigate(['directory']);
 }
}

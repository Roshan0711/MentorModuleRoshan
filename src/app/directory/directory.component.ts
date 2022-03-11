import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor(private router: Router, private _employee: EmployeeDataService) { }
  data=[{empID:'',Name:'',team:'',Designation:'',Gender:'',date:''}];

  ngOnInit(): void {
    this.data=this._employee.employeeData;  
  }
  
  onAddEmployee(){
    this.router.navigate(['add']); 
  }

}

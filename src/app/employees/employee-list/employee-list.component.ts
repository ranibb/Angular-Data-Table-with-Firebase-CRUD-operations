import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'actions']

  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          return { $key:item.key, ...item.payload.val() }
        })
        this.listData = new MatTableDataSource(array);
      }
    );
  }

}

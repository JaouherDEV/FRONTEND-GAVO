import { Component, OnInit } from '@angular/core';
import { AdminUserService } from 'src/app/services/admin-user.service';

@Component({
  selector: 'app-ui-user',
  templateUrl: './ui-user.component.html',
  styleUrls: ['./ui-user.component.scss']
})
export class UiUserComponent implements OnInit {
  sizePage:number;
  page:Number;
  elementt:number
  dataelement:any 
  constructor(private ser :AdminUserService) {
    this.page=1;
    this.sizePage=5
    this.elementt=4
     }

  ngOnInit(): void {
     this.ser.getuser().subscribe(data=>{
      this.dataelement=data;
    
     })
  }
wiouw(){
  alert('wiouw '+this.sizePage)
}
}

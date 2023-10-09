import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{
  
  constructor(private api: ApiserviceService) { }
  readInvoice: any;
  successMsg: any;
  ngOnInit(): void {
    this.api.getAllInvoice().subscribe((res) => {
      console.log('Get All Data', res);
      this.readInvoice = res.data;
    })
  }

}


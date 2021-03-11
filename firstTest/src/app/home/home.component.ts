import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 count : number = 0;
 name : string = ''
  constructor() { }

  ngOnInit(): void {
  }
  counter(){
   this.count += 1;
  }
}

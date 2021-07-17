import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// counter variable

roboticpro:number =0;
fullstack:number =0;
datascience:number =0;
digitalmark:number =0;

roboticprocountstop:any = setInterval(()=>{
  this.roboticpro++;
  //stopping the count
  if(this.roboticpro ==89 )
  {
    //stop the function
    clearInterval(this.roboticprocountstop);
  }
},10)//every 10millisecond count will increase

fullstackcountstop:any = setInterval(()=>{
  this.fullstack++;
  //stopping the count
  if(this.fullstack ==232 )
  {
    //stop the function
    clearInterval(this.fullstackcountstop);
  }
},10)//every 10millisecond count will increase

datasciencecountstop:any = setInterval(()=>{
  this.datascience++;
  //stopping the count
  if(this.datascience ==253 )
  {
    //stop the function
    clearInterval(this.datasciencecountstop);
  }
},10)//every 10millisecond count will increase

digitalmarkcountstop:any = setInterval(()=>{
  this.digitalmark++;
  //stopping the count
  if(this.digitalmark ==63 )
  {
    //stop the function
    clearInterval(this.digitalmarkcountstop);
  }
},10)//every 10millisecond count will increase
}





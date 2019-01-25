import { Component, OnInit } from '@angular/core';
import { isNgContainer } from '@angular/compiler';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(){
}
ngOnInit(){
  this.start()
}
start(){
  const observable = Observable.create((observer: Observer<string>)=>
    {
      setTimeout(() => {
        observer.next( "first" );
        },2000);
        setTimeout(() => {
        observer.next( "second" );
        },4000);
        setTimeout(() => {
        observer.complete();
        },5000);
      }); 
     observable.subscribe(
        (data:string)=> {console.log(data)},
        (error : string) => { console.log(error) } ,
       // error => this.anyErrors = true,
        () => { console.log("completed")}
      );
    }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  
  constructor() {
  }


  ngOnInit(): void {
    const numbers$=interval(1000).pipe(take(5));
    numbers$.subscribe(sub=>{
      console.log(sub);
    });

    const of$ = of(1,2,3,4,5,6).pipe(filter(f=>f%2==0),map(m=>m*100));
    of$.subscribe(Sub=>{
      console.log(Sub);
      
    });

  }
 
 
  

  

}

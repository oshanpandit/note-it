import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css'
})
export class TrashComponent {

   constructor(private dataService:DataService){};
   deletedItems:User[]=[];
   curr_search="";
   ngOnInit(){
     this.deletedItems=this.dataService.deletedItems;
     console.log("hello");
     this.dataService.sharedString$.subscribe(newString => {
      this.curr_search = newString;
    });
   }

   removeTask(index:number){
     this.dataService.removeDeletedItem(index);
   }

}

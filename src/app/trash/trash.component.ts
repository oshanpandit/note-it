import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.css'
})
export class TrashComponent {

   constructor(private dataService:DataService){};
   deletedItems:{title:string,content:string}[]=[];
   ngOnInit(){
     this.deletedItems=this.dataService.deletedItems;
     console.log("hello");
   }

   removeTask(index:number){
     this.dataService.removeDeletedItem(index);
   }

}

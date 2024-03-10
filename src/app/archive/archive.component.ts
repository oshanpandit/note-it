import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {

   constructor(private dataService:DataService){};
   archivedItems:User[];
   curr_search="";
   ngOnInit(){
    this.archivedItems=this.dataService.archivedItems;
    console.log(this.archivedItems);
      this.dataService.sharedString$.subscribe(newString => {
      this.curr_search = newString;
    });

   }
   removeTask(index:number){
    this.archivedItems.splice(index,1);
   }

}

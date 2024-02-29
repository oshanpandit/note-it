import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css'
})
export class ArchiveComponent {

   constructor(private dataServive:DataService){};
   archivedItems:{title:string,content:string}[];
   ngOnInit(){
    this.archivedItems=this.dataServive.archivedItems;
    console.log(this.archivedItems);
   }
   removeTask(index:number){
    this.archivedItems.splice(index,1);
   }

}

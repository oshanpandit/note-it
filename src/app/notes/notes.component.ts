import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css' // Changed styleUrl to styleUrls
})
export class NotesComponent {

    constructor(private dataService:DataService){};
    noteItems:{title:string,content:string}[];
    curr_title="";
    curr_content="";

    ngOnInit(){
      this.noteItems=this.dataService.noteitems;
    }

    addTask(){
       if(this.curr_content!=''){
          this.dataService.addItem(this.curr_title,this.curr_content);
          console.log(this.dataService.noteitems);
       }
    }
    removeTask(index:number){
       this.dataService.removeItem(index);
    }
    
    archiveTask(index:number){
       this.dataService.archiveTask(index);
    }

}

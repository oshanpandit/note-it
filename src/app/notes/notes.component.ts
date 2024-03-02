import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { AfterViewInit,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css' 
})
export class NotesComponent {

    constructor(private dataService:DataService){};
    noteItems:{title:string,content:string}[];
    curr_title="";
    curr_content="";
    curr_search='';
    title_status=false;
    viewToggle=false;

    ngOnInit(){
      this.noteItems=this.dataService.noteitems;
      this.dataService.sharedString$.subscribe(newString => {
         this.curr_search = newString;
       });

       this.dataService.toggleViewSubject$.subscribe(newView => {
         this.viewToggle = newView;
         console.log("toggled status",this.viewToggle)
       });
    }

    addTask(){
    
       if(this.curr_content!=''){
          this.dataService.addItem(this.curr_title,this.curr_content);
       }
      this.title_status=false;
       this.curr_content="";
       this.curr_title="";
    }
    removeTask(index:number){
       
        this.dataService.removeItem(index);
    }
    
    archiveTask(index:number){
       this.dataService.archiveTask(index);
    }

    hasClicked(){
      this.title_status=true;
    }

    getStatus(){
      return this.title_status;
    }


}

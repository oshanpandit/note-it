import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


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
    viewProfile=false;
    isDark=false;
    overlay_view=false;

    ngOnInit(){
      this.noteItems=this.dataService.noteitems;
      this.dataService.sharedString$.subscribe(newString => {
         this.curr_search = newString;
       });

       this.dataService.toggleViewSubject$.subscribe(newView => {
         this.viewToggle = newView;
         console.log("toggled status",this.viewToggle)
       });

       this.dataService.toggleProfileSubject$.subscribe(newProfile => {
        this.viewProfile = newProfile;
        console.log("profile status",this.viewProfile)
      });

      this.dataService.toggleDarkSubject$.subscribe(newStatus => {
        this.isDark = newStatus;
        console.log(this.isDark)
      });
      
      this.dataService.toggleOverlaySubject$.subscribe(newOverlay => {
        this.overlay_view = newOverlay;
        console.log("the overlay view is "+this.overlay_view)
      });
    }

    addTask(){
    
       if(this.curr_content!=''){
          this.dataService.addItem(this.curr_title,this.curr_content);
       }
      // this.title_status=false;
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
      if(this.curr_title!=''){
        this.title_status=true;
        return;
      }
      this.title_status=!this.title_status;
    }

    getStatus(){
      return this.title_status;
    }

    getDots(note:string){
      if(note.length>297){
        return "..."
      }
    }

    overlayClick(index:number){
      
      if(this.noteItems[index].title.length>0){
        this.dataService.overlay_title=this.noteItems[index].title;
      }else{
        this.dataService.overlay_title="Title..";
      }
      this.dataService.overlay_content=this.noteItems[index].content;
      this.dataService.onOverlayToggle();
    }

}

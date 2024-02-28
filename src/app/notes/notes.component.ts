import { Component } from '@angular/core';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

    noteItems:{title:string,content:string}[]=[];
    curr_title:string="";
    curr_content:string="";

    addTask(){
      console.log(this.curr_title);
      console.log(this.curr_content);
      this.noteItems.push({title:this.curr_title,content:this.curr_content});
    }
  

}

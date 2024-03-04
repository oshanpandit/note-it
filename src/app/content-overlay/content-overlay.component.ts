import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content-overlay',
  templateUrl: './content-overlay.component.html',
  styleUrl: './content-overlay.component.css'
})
export class ContentOverlayComponent {

  constructor(private dataService:DataService){};
  title="Title..";
  content="";
  ngOnInit(){
    this.title=this.dataService.overlay_title;
    this.content=this.dataService.overlay_content;
  }
  onClose(){
    this.dataService.onOverlayToggle();
  }
}

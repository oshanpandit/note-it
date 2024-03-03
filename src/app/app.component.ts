import { Component,Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
   sideNavStatus:boolean=false;
   constructor(private dataService:DataService){};
   isDark=false;
   ngOnInit(){
    this.dataService.toggleDarkSubject$.subscribe(newStatus => {
      this.isDark = newStatus;
      console.log("profile status",this.isDark)
    });
   }
}

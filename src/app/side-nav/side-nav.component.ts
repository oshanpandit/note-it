import { Component, HostListener } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core'
import { DataService } from '../data.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  constructor(private dataService:DataService){}
  isDark=false;

  ngOnInit(){
      this.dataService.toggleDarkSubject$.subscribe(newStatus => {
      this.isDark = newStatus;
      console.log("profile status",this.isDark)
    });
  }

  @Input() sideNavStatus:boolean=false;

}
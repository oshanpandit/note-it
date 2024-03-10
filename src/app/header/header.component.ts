import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataService:DataService){};
  

  ngOnInit(){
   
  }
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  isDark=false;
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    console.log("toggled");
    this.sideNavToggled.emit(this.menuStatus);
  }
 

    onSubmit(event:any){
      this.dataService.updateString(event.target.value);
  }

  viewToggled(){
    this.dataService.onViewToggle();
  }

  profileToggled(){
    this.dataService.onProfileToggle();
  }

  darkToggled(){
    this.isDark=!this.isDark;
    this.dataService.onDarkToggle();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if(window.innerWidth<=700 && this.menuStatus==true){
      this.menuStatus=false;
    }
    this.sideNavToggled.emit(this.menuStatus);
  }

}

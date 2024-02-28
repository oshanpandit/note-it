import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    console.log("toggled");
    this.sideNavToggled.emit(this.menuStatus);
  }


}

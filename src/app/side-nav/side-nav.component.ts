import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  @Input() sideNavStatus:boolean=false;
  

}

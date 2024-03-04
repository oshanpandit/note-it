import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class DataService{

    noteitems:{title:string,content:string}[]=[];
    deletedItems:{title:string,content:string}[]=[];
    archivedItems:{title:string,content:string}[]=[];
    viewToggle=false;
    profileToggle=false;
    darkToggle=false;
    overlay_title="";
    overlay_content="";
    overlay_view=false;


    private sharedStringSubject = new BehaviorSubject<string>('');
    sharedString$: Observable<string> = this.sharedStringSubject.asObservable();

    private toggleViewSubject = new BehaviorSubject<boolean>(this.viewToggle);
    toggleViewSubject$: Observable<boolean> = this. toggleViewSubject.asObservable();

    
    private toggleProfileSubject = new BehaviorSubject<boolean>(this.profileToggle);
    toggleProfileSubject$: Observable<boolean> = this. toggleProfileSubject.asObservable();

    
    private toggleDarkSubject = new BehaviorSubject<boolean>(this.darkToggle);
    toggleDarkSubject$: Observable<boolean> = this. toggleDarkSubject.asObservable();

    private toggleOverlaySubject = new BehaviorSubject<boolean>(this.overlay_view);
    toggleOverlaySubject$: Observable<boolean> = this. toggleOverlaySubject.asObservable();
  
    updateString(newString: string) {
      this.sharedStringSubject.next(newString);
    }
    onViewToggle(){
       this.viewToggle=!this.viewToggle;
       this.toggleViewSubject.next(this.viewToggle);
    }
    onProfileToggle(){
        this.profileToggle=!this.profileToggle;
        this.toggleProfileSubject.next(this.profileToggle);
    }

    onDarkToggle(){
        this.darkToggle=!this.darkToggle;
        this.toggleDarkSubject.next(this.darkToggle);
        console.log("dark has been toggled and the value is ",this.darkToggle);
    }
    onOverlayToggle(){
        this.overlay_view=!this.overlay_view;
        this.toggleOverlaySubject.next(this.overlay_view);
    }

    addItem(title:string,content:string){
        this.noteitems.push({title:title,content:content});
    }

    removeItem(index:number){
         this.deletedItems.push(this.noteitems[index]);
         console.log(this.deletedItems);
         this.noteitems.splice(index,1);
    }

    removeDeletedItem(index:number){
        this.deletedItems.splice(index,1);
    }

    archiveTask(index:number){
        this.archivedItems.push(this.noteitems[index]);
        this.noteitems.splice(index,1);
    }

}
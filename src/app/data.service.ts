import { Injectable } from "@angular/core";
@Injectable({providedIn:'root'})
export class DataService{

    noteitems:{title:string,content:string}[]=[];
    deletedItems:{title:string,content:string}[]=[];
    archivedItems:{title:string,content:string}[]=[];

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
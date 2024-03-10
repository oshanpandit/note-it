import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NotesComponent } from './notes/notes.component';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ContentOverlayComponent } from './content-overlay/content-overlay.component';
import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes:Routes=[
  {path:'',component:NotesComponent},
  {path:'archive',component:ArchiveComponent},
  {path:'trash',component:TrashComponent},
  {path:'test',component:TestComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    NotesComponent,
    ArchiveComponent,
    TrashComponent,
    FilterPipePipe,
    TestComponent,
    ProfileComponent,
    ContentOverlayComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DragDropModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

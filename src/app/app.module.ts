import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { from } from 'rxjs';
import { Routes, RouterModule} from '@angular/router';

const routes:Routes = [
  {path:'input',component:InputComponent},
  {path:'list',component:ListComponent},
  {path:'edit',component:EditComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InputComponent, ListComponent, EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

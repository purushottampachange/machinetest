import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './lists/lists.component';
import { TablesComponent } from './tables/tables.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { StdudentComponent } from './stdudent/stdudent.component';
import { TudoComponent } from './tudo/tudo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { GetConfirmComponent } from './get-confirm/get-confirm.component';
import{FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TablesComponent,
    PostsComponent,
    ProductsComponent,
    StdudentComponent,
    TudoComponent,
    GetConfirmComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

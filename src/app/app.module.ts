import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user/services/user.service';
import { BlogComponent } from './blog/blog.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, BookComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

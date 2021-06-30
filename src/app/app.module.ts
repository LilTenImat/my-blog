import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { PostPageComponent } from './post-page/post-page.component';
import { DescriptionBlocksComponent } from './description-blocks/description-blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    TopMenuComponent,
    PostPageComponent,
    DescriptionBlocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

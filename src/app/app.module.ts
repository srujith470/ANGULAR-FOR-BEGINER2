import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlitedDirective } from './directives/highlited.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    HighlitedDirective,
    NgxUnlessDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

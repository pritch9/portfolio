import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './Views/portfolio/portfolio.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { PortfolioItemComponent } from './Views/portfolio/portfolio-item/portfolio-item.component';
import { IconComponent } from './GlobalComponents/icon/icon.component';
import { MarkdownModule } from 'ngx-markdown';
import { ContactComponent } from './Views/contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    NavigationComponent,
    PortfolioItemComponent,
    IconComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

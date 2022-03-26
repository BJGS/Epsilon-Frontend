import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormeleComponent } from './formele/formele.component';
import { TableFunComponent } from './tablefun/tablefun.component';
import { HttpClientModule } from '@angular/common/http';
import { SortDirective } from './shared/sort.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    CardComponent,
    FormeleComponent,
    TableFunComponent,
    SortDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

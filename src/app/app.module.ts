import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormeleComponent } from './formele/formele.component';
import { TableFunComponent } from './tablefun/tablefun.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CardComponent,
    FormeleComponent,
    TableFunComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

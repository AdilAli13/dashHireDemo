import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReportsComponent } from './reports/reports.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponentComponent } from './area-component/area-component.component';
import { TopWidgetComponent } from './top-widget/top-widget.component';
import {MatSelectModule} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponentComponent } from './table-component/table-component.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    ReportsComponent,
    AreaComponentComponent,
    TopWidgetComponent,
    TableComponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FontAwesomeModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    HighchartsChartModule,
    MatSelectModule, FormsModule, ReactiveFormsModule,
    MatTableModule,MatPaginatorModule
  ],
  providers: [SideNavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

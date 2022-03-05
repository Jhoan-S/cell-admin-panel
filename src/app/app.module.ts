import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		HomeModule,
		BrowserModule,
		SidebarModule,
		AppRoutingModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: () =>
			import('../dashboard/dashboard.module').then(m => m.DashboardModule),
	},
	{
		path: 'settings',
		loadChildren: () =>
			import('../settings/settings.module').then(m => m.SettingsModule),
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},
];

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [HomeComponent],
})
export class HomeModule {}

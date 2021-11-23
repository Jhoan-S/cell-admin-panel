import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
	},
	// {
	// 	path: '',
	// 	redirectTo: '/dashboard',
	// 	pathMatch: 'full'
	// }
];

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [DashboardComponent],
})
export class DashboardModule {}

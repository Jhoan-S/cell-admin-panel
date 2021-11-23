import { Component, OnInit } from '@angular/core';
import { sidebarAnimations } from './animations/sidebar.animations';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	animations: [sidebarAnimations.openClose]
})
export class SidebarComponent implements OnInit {

	isOpen: boolean = true;

	constructor() { }

	ngOnInit(): void { }

	toggleSidebar(): void {
		this.isOpen = !this.isOpen;
	}
}

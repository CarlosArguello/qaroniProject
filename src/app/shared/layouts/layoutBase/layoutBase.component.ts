import { Component, Input, OnInit } from "@angular/core"

@Component({
	selector: "app-layout-base",
	templateUrl: "./layoutBase.component.html",
})
export class LayoutBaseComponent implements OnInit {
	constructor() {}

	@Input() hasData: boolean = false

	ngOnInit() {}
}

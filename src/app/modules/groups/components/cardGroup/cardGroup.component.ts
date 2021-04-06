import { Input } from "@angular/core"
import { Component, OnInit } from "@angular/core"

@Component({
	selector: "app-card-group",
	templateUrl: "./cardGroup.component.html",
})
export class CardGroupComponent implements OnInit {
	@Input() category: string | undefined
	@Input() title: string
	@Input() imageUrl: string

	constructor() {}

	ngOnInit(): void {}
}

import { Component, Input, OnInit } from "@angular/core"

@Component({
	selector: "app-card-news",
	templateUrl: "./card-news.component.html",
	styleUrls: ["./card-news.component.scss"],
})
export class CardNewsComponent implements OnInit {
	@Input() title: string = ""
	@Input() imageUrl: string = ""
	@Input() htmlContent: string = ""
	constructor() {}

	ngOnInit(): void {}
}

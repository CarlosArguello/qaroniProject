import { Input, ViewEncapsulation } from "@angular/core"
import { Component, OnInit } from "@angular/core"

@Component({
	selector: "app-html-content",
	templateUrl: "./htmlContent.component.html",
	styleUrls: ["./htmlContent.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class HtmlContentComponent implements OnInit {
	@Input() html: string | undefined = ""

	constructor() {}

	ngOnInit(): void {}
}

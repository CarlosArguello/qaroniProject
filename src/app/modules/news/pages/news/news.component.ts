import { Component, OnDestroy, OnInit } from "@angular/core"
import { NewsService } from "@core/services/news.service"
import { environment } from "@enviroments/environment"
import { NewsInterface } from "@shared/interfaces/newsInterface"

@Component({
	selector: "app-news",
	templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit, OnDestroy {
	news: NewsInterface[] = []
	getNewsObs: any

	constructor(private newService: NewsService) {}

	ngOnInit() {
		this.getNewsObs = this.newService.getNews().subscribe((result) => {
			if (result.length) {
				this.news = result
				if (!environment.production) console.log(result)
			}
		})
	}

	ngOnDestroy() {
		this.getNewsObs.unsubscribe()
	}
}

import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router"
import { NewsService } from "@core/services/news.service"
import { environment } from "@enviroments/environment"
import { NewsInterface } from "@shared/interfaces/newsInterface"

@Component({
	selector: "app-detail-news",
	templateUrl: "./detailNews.component.html",
})
export class DetailNewsComponent implements OnInit, OnDestroy {
	constructor(
		private newsService: NewsService,
		private route: ActivatedRoute
	) {}

	detailNews: NewsInterface
	routeObs: any
	getDetailNewsObs: any

	ngOnInit() {
		this.routeObs = this.route.params.subscribe((params: Params) => {
			this.getDetailNews(params.newsId)
		})
	}

	getDetailNews(newsId: string) {
		this.getDetailNewsObs = this.newsService
			.getDetailNews(newsId)
			.subscribe((result) => {
				if (result.length) {
					this.detailNews = result[0]
					if (!environment.production) console.log(result[0])
				}
			})
	}

	ngOnDestroy() {
		this.routeObs.unsubscribe()
		this.getDetailNewsObs.unsubscribe()
	}
}

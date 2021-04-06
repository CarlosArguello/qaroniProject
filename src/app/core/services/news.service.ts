import { Injectable } from "@angular/core"
import { paths } from "@enviroments/paths"
import { ApiService } from "@core/services/api.service"

@Injectable({
	providedIn: "root",
})
export class NewsService {
	constructor(private apiService: ApiService) {}

	getNews() {
		const pathNews = paths.news
		return this.apiService.get(pathNews)
	}

	getDetailNews(newId: string) {
		const pathDetailNews = paths.detailNews(newId)
		return this.apiService.get(pathDetailNews)
	}
}

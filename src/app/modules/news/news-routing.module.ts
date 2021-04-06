import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DetailNewsComponent } from "@modules/news/pages/detailNews/detailNews.component"
import { NewsComponent } from "./pages/news/news.component"

const routes: Routes = [
	{ path: "", component: NewsComponent },
	{ path: ":newsId", component: DetailNewsComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class NewsRoutingModule {}

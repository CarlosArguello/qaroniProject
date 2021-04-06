import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { NewsRoutingModule } from "./news-routing.module"
import { NewsComponent } from "@modules/news/pages/news/news.component"
import { SharedModule } from "@shared/shared.module"
import { MatCardModule } from "@angular/material/card"
import { DetailNewsComponent } from "@modules/news/pages/detailNews/detailNews.component";
import { CardNewsComponent } from './components/card-news/card-news.component'

@NgModule({
	declarations: [NewsComponent, DetailNewsComponent, CardNewsComponent],
	imports: [CommonModule, NewsRoutingModule, SharedModule, MatCardModule],
})
export class NewsModule {}

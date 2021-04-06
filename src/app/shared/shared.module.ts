import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { LayoutBaseComponent } from "@shared/layouts/layoutBase/layoutBase.component"
import { MatToolbarModule } from "@angular/material/toolbar"

import { HeaderComponent } from "./components/header/header.component"
import { RouterModule } from "@angular/router"
import { HtmlContentComponent } from "./components/htmlContent/htmlContent.component"
import { TitleComponent } from "./components/title/title.component"

@NgModule({
	imports: [CommonModule, MatToolbarModule, RouterModule],
	declarations: [
		LayoutBaseComponent,
		HeaderComponent,
		HtmlContentComponent,
		TitleComponent,
	],
	exports: [
		LayoutBaseComponent,
		HeaderComponent,
		HtmlContentComponent,
		TitleComponent,
	],
})
export class SharedModule {}

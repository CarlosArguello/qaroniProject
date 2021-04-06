import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { GroupsComponent } from "@modules/groups/pages/groups/groups.component"
import { GroupsRoutingModule } from "@modules/groups/groups-routing.module"
import { SharedModule } from "@shared/shared.module"
import { MatCardModule } from "@angular/material/card"
import { DetailGroupComponent } from "./pages/detailGroup/detailGroup.component"
import { CardGroupComponent } from "./components/cardGroup/cardGroup.component"

@NgModule({
	declarations: [
		GroupsComponent,
		DetailGroupComponent,
		CardGroupComponent,
	],
	imports: [
		CommonModule,
		GroupsRoutingModule,
		SharedModule,
		MatCardModule,
	],
})
export class GroupsModule {}

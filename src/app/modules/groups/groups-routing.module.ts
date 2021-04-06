import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DetailGroupComponent } from "@modules/groups/pages/detailGroup/detailGroup.component"
import { GroupsComponent } from "./pages/groups/groups.component"

const routes: Routes = [
	{ path: "", component: GroupsComponent },
	{ path: ":groupId", component: DetailGroupComponent },
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GroupsRoutingModule {}

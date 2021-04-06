import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AuthenticatedGuard } from "@core/guards/authenticated.guard"
import { NotAuthenticatedGuard } from "@core/guards/not-authenticated.guard"

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "/groups",
	},
	{
		path: "login",
		loadChildren: () =>
			import("@modules/auth/auth.module").then((m) => m.AuthModule),
		canActivate: [NotAuthenticatedGuard],
	},
	{
		path: "news",
		loadChildren: () =>
			import("@modules/news/news.module").then((m) => m.NewsModule),
	},
	{
		path: "groups",
		loadChildren: () =>
			import("@modules/groups/groups.module").then((m) => m.GroupsModule),
		canActivate: [AuthenticatedGuard],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

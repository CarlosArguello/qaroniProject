import { Component, OnDestroy, OnInit } from "@angular/core"
import { ActivatedRoute, Params } from "@angular/router"
import { GroupsService } from "@core/services/groups.service"
import { environment } from "@enviroments/environment"
import { groupsInterface } from "@shared/interfaces/groupsInterface"

@Component({
	selector: "app-detail-group",
	templateUrl: "./detailGroup.component.html",
})
export class DetailGroupComponent implements OnInit, OnDestroy {
	detailGroup: groupsInterface
	routeObs: any
	getDetailGroupObs: any

	constructor(
		private groupService: GroupsService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.routeObs = this.route.params.subscribe((params: Params) => {
			this.getDetailGroup(params.groupId)
		})
	}

	getDetailGroup(id: string) {
		this.getDetailGroupObs = this.groupService
			.getDetailGroup(id)
			.subscribe((result) => {
				if (result.length) {
					this.detailGroup = result[0]
					if (!environment.production) console.log("detail: ", result)
				}
			})
	}

	ngOnDestroy() {
		if (this.routeObs) this.routeObs.unsubscribe()
		if (this.getDetailGroupObs) this.getDetailGroupObs.unsubscribe()
	}
}

import { Component, OnDestroy, OnInit } from "@angular/core"
import { GroupsService } from "@core/services/groups.service"
import { environment } from "@enviroments/environment"
import { groupsInterface } from "@shared/interfaces/groupsInterface"

@Component({
	selector: "app-groups",
	templateUrl: "./groups.component.html",
})
export class GroupsComponent implements OnInit, OnDestroy {
	constructor(private groupService: GroupsService) {}

	groups: groupsInterface[] = []
	getGroupsObs: any

	ngOnInit(): void {
		this.groupService.getGroups().subscribe((result) => {
			if (result.length) {
				this.groups = result
				if (!environment.production) console.log(result)
			}
		})
	}

	ngOnDestroy() {
		if (this.getGroupsObs) this.getGroupsObs.unsubscribe()
	}
}

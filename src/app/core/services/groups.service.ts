import { Injectable } from "@angular/core"
import { ApiService } from "@core/services/api.service"
import { paths } from "@enviroments/paths"

@Injectable({
	providedIn: "root",
})
export class GroupsService {
	constructor(private apiService: ApiService) {}

	getGroups() {
		const pathGroups = paths.groups
		return this.apiService.get(pathGroups)
	}

	getDetailGroup(groupId: string) {
		const pathDetailGroup = paths.detailGroup
		return this.apiService.get(pathDetailGroup(groupId))
	}
}

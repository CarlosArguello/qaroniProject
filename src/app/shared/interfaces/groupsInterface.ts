export interface groupsInterface {
	groupId: string
	type: string
	name: string
	status: string
	imageUrl: string
	category: categoryInterface
}

export interface categoryInterface {
	language: string
	slug: string
	name: string
}

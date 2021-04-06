export interface ResponseInterface {
	input: string
	result: any[]
	links: null
	errors: ResponseErrorInterface[]
}

export interface ResponseErrorInterface {
	code: string
	title: string
	detail: string
	source: any[]
	links: any[]
}

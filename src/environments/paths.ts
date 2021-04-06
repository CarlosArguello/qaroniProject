import { environment } from "@enviroments/environment"

export const paths = {
	Athentication: `/merchants/${environment.merchantId}/users/logins`, //POST;
	news: `/merchants/${environment.merchantId}/news`,
	detailNews: (id: string) =>
		`/merchants/${environment.merchantId}/news/${id}`,
	groups: `/merchants/${environment.merchantId}/groups`,
	detailGroup: (id: string) =>
		`/merchants/${environment.merchantId}/groups/${id}`,
}

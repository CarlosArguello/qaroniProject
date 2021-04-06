import { Location } from "@angular/common"
import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { environment } from "@enviroments/environment"
import { EMPTY, Observable, throwError } from "rxjs"
import { retry, catchError } from "rxjs/operators"
import Swal from "sweetalert2"

@Injectable({
	providedIn: "root",
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
	constructor(private location: Location, private router: Router) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		//const cloneReq = req.clone()

		return next
			.handle(req)
			.pipe(catchError((err) => this.requestError(err)))
	}

	requestError(err: HttpErrorResponse) {
		const statusResponse: string | number =
			err.error.errors.length > 0 ? err.error.errors[0].code : err.status

		const alertMessage = Swal.mixin({
			icon: "error",
			timer: 4000,
			toast: true,
			position: "bottom-end",
			showConfirmButton: false,
			title: "Ocurrio un error",
			customClass: { container: "m-3" },
		})

		switch (statusResponse) {
			case "E0012":
				alertMessage.fire({ text: "Usuario o contraseña incorrecto" })

				break

			default:
				alertMessage
					.fire({ text: "Se redireccionara a la pestaña anterior" })
					.then(() => this.location.back())
		}

		if (!environment.production) {
			console.error(err)
		}

		//return throwError(err)
		return EMPTY
	}
}

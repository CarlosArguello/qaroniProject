import { Component, OnInit, OnDestroy } from "@angular/core"
import { AuthService } from "@core/services/auth.service"
import { Router } from "@angular/router"
import {
	AuthDataInterface,
	LoginInterface,
} from "@shared/interfaces/loginInterface"

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit, OnDestroy {
	loginObs: any

	constructor(private authService: AuthService, private router: Router) {}

	sendLogging(user: LoginInterface) {
		this.loginObs = this.authService.login(user).subscribe((result) => {
			if (result.length) {
				const response: AuthDataInterface = result[0]
				this.authService.token = response.access_token
				this.router.navigate(["/groups"])
			}
		})
	}

	ngOnInit() {}

	ngOnDestroy() {
		if (this.loginObs) this.loginObs.unsubscribe()
	}
}

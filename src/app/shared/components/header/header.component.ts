import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "@core/services/auth.service"

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit(): void {}

	get isLogged() {
		return this.authService.isLogged
	}

	logout() {
		this.authService.logout()
		this.router.navigate(["/login"])
	}
}

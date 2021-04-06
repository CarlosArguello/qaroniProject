import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms"
import { LoginInterface } from "@shared/interfaces/loginInterface"

@Component({
	selector: "app-login-form",
	templateUrl: "./loginForm.component.html",
})
export class LoginFormComponent implements OnInit {
	@Output() onSubmit = new EventEmitter<LoginInterface>()

	loginForm: FormGroup

	constructor(fb: FormBuilder) {
		this.loginForm = fb.group({
			username: new FormControl("", [
				Validators.required,
				Validators.email,
			]),
			password: new FormControl("", [
				Validators.required,
				Validators.minLength(4),
			]),
		})
	}

	get controls() {
		return this.loginForm.controls
	}
	get values() {
		return this.loginForm.value
	}

	submitForm() {
		if (this.loginForm.status == "VALID") {
			this.onSubmit.emit(this.values)
		}
	}

	ngOnInit() {}
}

import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AuthRoutingModule } from "@modules/auth/auth-routing.module"
import { MatCardModule } from "@angular/material/card"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { SharedModule } from "@shared/shared.module"

import { LoginComponent } from "@modules/auth/pages/login/login.component"
import { LoginFormComponent } from "@modules/auth/components/loginForm/loginForm.component"

@NgModule({
	imports: [
		CommonModule,
		AuthRoutingModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		SharedModule,
	],
	declarations: [LoginComponent, LoginFormComponent],
})
export class AuthModule {}

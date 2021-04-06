import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "@app/app-routing.module"
import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from "@app/app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { AuthModule } from "@modules/auth/auth.module"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { SharedModule } from "@shared/shared.module"
import { CoreModule } from "@core/core.module"

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		AuthModule,
		SharedModule,
		CoreModule,
	],
	bootstrap: [AppComponent],
	providers: [],
})
export class AppModule {}

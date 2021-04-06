import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { ErrorHandlerInterceptor } from "@core/interceptors/errorHandler.interceptor"

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerInterceptor,
			multi: true,
		},
	],
})
export class CoreModule {}

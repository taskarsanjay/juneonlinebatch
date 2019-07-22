import {Injectable} from '@angular/core'
import {HttpInterceptor} from '@angular/common/http'
@Injectable()

export class AuthenticateInterceptor implements HttpInterceptor {
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
      let clone=req.clone({
          headers: req.headers.set('autherization','Baerer xx.yy.zzz'),
          
      })
      return next.handle(clone);
    }


}
import { HttpInterceptorFn } from '@angular/common/http';

export const errorHandlerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

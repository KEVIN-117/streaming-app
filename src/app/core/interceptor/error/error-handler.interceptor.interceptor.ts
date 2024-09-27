import { HttpInterceptorFn } from '@angular/common/http';

export const errorHandlerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request was made')
  return next(req);
};

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(contex: ExecutionContext) {
    const request = contex.switchToHttp().getRequest();
    return request.isAuthenticated();
  }
}

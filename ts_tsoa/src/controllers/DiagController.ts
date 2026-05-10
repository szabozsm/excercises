import { Controller, Get, Route, Tags } from 'tsoa';

@Route('diag')
@Tags('Diag')
export class DiagController extends Controller {
  @Get('health')
  public async health(): Promise<string> {
    return 'OK';
  }
}
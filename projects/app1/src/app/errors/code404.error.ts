export class Code404Error extends Error {
  route = '/code404';

  constructor(e?: string) {
    super(e);
    this.name = 'Code404Error';
  }
}

export class Code500Error extends Error {
  route = '/code500';

  constructor(e: string) {
    super(e);
    this.name = 'Code500Error';
  }
}

export class TablefunModel {
  constructor(public cookies: Cookies[]) {}
}
export class Cookies {
  constructor(
    public name: string,
    public price: string,
    public category: string
  ) {}
}

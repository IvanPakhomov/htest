export class Base {
  protected url;

  constructor() {
    this.url = 'https://reqres.in/api'; // env('API_BASE')
  }
}

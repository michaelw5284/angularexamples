import { Injectable } from '@angular/core';

@Injectable()
export class HelpdeskService {

  constructor() { }

  getCalls() {
     return ["Call1", "Call2","Call3","Call4"]

  }
}

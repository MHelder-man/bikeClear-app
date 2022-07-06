import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BikeClear} from "./bike-clear";

@Injectable({
  providedIn: 'root'
})
export class BikeClearService {

  constructor(public  http: HttpClient) { }

  getAll() {
    return this.http.get<BikeClear[]>(
      'http://localhost:8080/bikeClear');
  }

  save(bikeClear : BikeClear) {
    return this.http.post(
      'http://localhost:8080/bikeClear', bikeClear);
  }
  delete(id: number) {
    return this.http.delete(
      'http://localhost:8080/bikeClear/' + id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  login(usuario, senha) {
    if (usuario == 'teste' && senha == 'teste') {
      return {"data": { "user": "teste", "token": "SA7DSA98D09A8SD09ASD90ASD8"}};
    }
    return {"data": { "user": usuario, "token": null}};
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  id: any;
  element: any;

  constructor(private http : HttpClient) { }

  getListaTurmas(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}

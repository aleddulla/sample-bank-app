import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  baseURL = 'http://localhost:8080';
}

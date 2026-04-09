import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {
  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  // get all characters
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  // get characters by house
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/house/${house.toLowerCase()}`);
  }

  // get one character by id
  getCharacterById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/character/${id}`);
  }
}
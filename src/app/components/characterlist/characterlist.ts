import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Character } from '../../models/character';
import { HarrypotterService } from '../../services/harrypotter';
import { Characterfilter } from '../characterfilter/characterfilter';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    Characterfilter,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];

  constructor(private hpService: HarrypotterService) {}

  ngOnInit(): void {
    // load all characters when page opens
    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.filteredCharacters = data;
      },
      error: (err) => console.error('Error fetching characters:', err)
    });
  }

  onHouseSelected(house: string): void {
    // if no house selected, show all characters
    if (!house) {
      this.filteredCharacters = this.characters;
      return;
    }

    // otherwise fetch characters from selected house
    this.hpService.getCharactersByHouse(house).subscribe({
      next: (data) => {
        this.filteredCharacters = data;
      },
      error: (err) => console.error('Error filtering by house:', err)
    });
  }
}
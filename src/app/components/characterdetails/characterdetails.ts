import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HarrypotterService } from '../../services/harrypotter';
import { Character } from '../../models/character';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  character?: Character;

  constructor(
    private route: ActivatedRoute,
    private hpService: HarrypotterService
  ) {}

  ngOnInit(): void {
    // get id from route
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      // fetch selected character details
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          this.character = data;
        },
        error: (err) => console.error('Error fetching character details:', err)
      });
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HarrypotterService } from '../../services/harrypotter';

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
  character: any = null;

  constructor(
    private route: ActivatedRoute,
    private hpService: HarrypotterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route ID:', id);

    if (id) {
      this.hpService.getCharacterById(id).subscribe({
        next: (data) => {
          console.log('API response:', data);

          if (Array.isArray(data) && data.length > 0) {
            this.character = data[0];
          } else {
            this.character = data;
          }

          console.log('Character used in page:', this.character);
        },
        error: (err) => {
          console.error('Error fetching character details:', err);
        }
      });
    }
  }
}
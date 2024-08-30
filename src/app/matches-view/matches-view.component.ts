import { Component, OnInit } from '@angular/core';
import { MatchInfoComponent } from '../match-info/match-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Match } from '../models/match';

@Component({
  selector: 'app-matches-view',
  standalone: true,
  imports: [MatchInfoComponent, CommonModule, FormsModule],
  templateUrl: './matches-view.component.html',
  styleUrl: './matches-view.component.css',
})
export class MatchesViewComponent implements OnInit {
  ngOnInit(): void {
    this.matches = [
      {
        name: 'Equipo1 vs Equipo2',
      },
      {
        name: 'Equipo3 vs Equipo4',
      },
    ];
  }

  matches: Match[] = [];
  matchSelected: string = '';
  myDate: Date = new Date();
  onSelected(selected: string) {
    this.matchSelected = selected;
  }

  onDeleteLast() {
    this.matches.pop();
  }
}

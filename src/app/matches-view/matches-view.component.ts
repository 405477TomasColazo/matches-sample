import { Component } from '@angular/core';
import { MatchInfoComponent } from '../match-info/match-info.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-matches-view',
  standalone: true,
  imports: [MatchInfoComponent, NgIf, NgFor],
  templateUrl: './matches-view.component.html',
  styleUrl: './matches-view.component.css',
})
export class MatchesViewComponent {
  matches: string[] = ['Equipo1 vs Equipo2', 'Equipo3 vs Equipo4'];
  matchSelected: string = '';

  onSelected(selected: string) {
    this.matchSelected = selected;
  }
}

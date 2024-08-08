import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { Story, StoryService } from '../story.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sprint-display',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  templateUrl: './sprint-display.component.html',
  styleUrl: './sprint-display.component.scss',
})
export class SprintDisplayComponent implements OnChanges {
  @Input() selectedStories: any[] = [];
  @Input() clearSelectstory: boolean = false;

  constructor(private storyService: StoryService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.clearSelectstory) {
      this.selectedStories = [];
      this.clearSelectstory = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { Story, StoryService } from '../story.service';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatGridListModule, MatToolbarModule],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss',
})
export class StoryListComponent implements OnInit {
  stories$: Observable<Story[]>;

  constructor(private storyService: StoryService) {
    this.stories$ = this.storyService.stories$;
  }

  ngOnInit(): void {}
}

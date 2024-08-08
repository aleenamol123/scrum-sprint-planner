import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoryService } from '../story.service';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-story-form',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './story-form.component.html',
  styleUrl: './story-form.component.scss',
})
export class StoryFormComponent {
  title = '';
  points: number | null = null;

  constructor(private storyService: StoryService) {}

  addStory() {
    if (this.title && this.points !== null) {
      this.storyService.addStory({
        title: this.title,
        points: this.points,
        selected: false,
      });
      this.title = '';
      this.points = null;
    }
  }
}

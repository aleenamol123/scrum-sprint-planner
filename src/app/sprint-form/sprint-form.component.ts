import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Story, StoryService } from '../story.service';
import { take } from 'rxjs';
import { SprintDisplayComponent } from '../sprint-display/sprint-display.component';

@Component({
  selector: 'app-sprint-form',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SprintDisplayComponent,
  ],
  templateUrl: './sprint-form.component.html',
  styleUrl: './sprint-form.component.scss',
})
export class SprintFormComponent {
  targetPoints: number | null = null;
  currentStories: any[] = [];
  selectedStories: any[] = [];
  clearSelectstory: boolean = false;

  constructor(private storyService: StoryService) {}
  setTargetPoints() {}

  autoSelectStories() {
    if (this.targetPoints !== null) {
      this.storyService.stories$
        .pipe(take(1))
        .subscribe((value) => (this.currentStories = value));
      this.selectedStories = this.storyService.findBestCombination(
        this.currentStories,
        this.targetPoints
      );
      this.clearSelectstory = false;
    }
  }

  clearStories() {
    this.storyService.clearStories();
  }

  clearSelectedStories() {
    this.clearSelectstory = true;
  }
}

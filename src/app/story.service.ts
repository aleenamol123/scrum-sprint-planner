import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Story {
  title: string;
  points: number;
  selected: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private storiesSubject = new BehaviorSubject<Story[]>([]);
  stories$ = this.storiesSubject.asObservable();
  bestCombination: Story[] = [];

  addStory(story: Story) {
    const currentStories = this.storiesSubject.getValue();
    if (!currentStories.find((s) => s.title === story.title)) {
      this.storiesSubject.next([...currentStories, story]);
    }
  }

  findBestCombination(stories: Story[], targetPoints: number): Story[] {
    let bestSum = 0;
    const backtrack = (
      currentCombination: Story[],
      currentSum: number,
      index: number
    ) => {
      if (currentSum > targetPoints) {
        return;
      }
      if (currentSum > bestSum) {
        this.bestCombination = [...currentCombination];
        bestSum = currentSum;
      }
      for (let i = index; i < stories.length; i++) {
        currentCombination.push(stories[i]);
        backtrack(currentCombination, currentSum + stories[i].points, i + 1);
        currentCombination.pop();
      }
    };

    backtrack([], 0, 0);
    return this.bestCombination;
  }

  clearStories() {
    this.storiesSubject.next([]);
  }

  setStories(stories: Story[]) {
    this.storiesSubject.next(stories);
  }
}

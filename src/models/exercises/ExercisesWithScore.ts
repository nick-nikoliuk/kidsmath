import { Exercises } from './Exercises';
import { Currency } from '../../services/Currency';
import { messages } from '../../messages';

export class ExercisesWithScore {
  private mistakes = 0;

  constructor(private exercises: Exercises, private exerciseScore: number) {}

  getView(): string {
    return `${messages.prize} ${Currency.toPrice(this.getScore())}\n\n${this.exercises.getQuestion()}`;
  }

  tryAnswer(answer: number): number {
    if (this.exercises.tryAnswer(answer)) {
      return this.getScore();
    }

    this.mistakes++;

    return -1;
  }

  next() {
    this.exercises.next();
    this.mistakes = 0;
  }

  private getScore(): number {
    switch (this.mistakes) {
      case 0:
      case 1:
        return this.exerciseScore;
      case 2:
        return Math.floor(this.exerciseScore / 2);

      default:
        return 0;
    }
  }
}
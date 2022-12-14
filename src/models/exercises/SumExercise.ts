import { IExercise } from '../types';

export abstract class SumExercise implements IExercise {

  protected constructor(protected firstNumber: number, protected secondNumber: number) {}

  getQuestion(): string {
    return `${this.firstNumber} + ${this.secondNumber} = ?`;
  }

  tryAnswer(answer: number): boolean {
    return answer === this.getAnswer();
  }

  protected getAnswer(): number {
    return this.firstNumber + this.secondNumber;
  }
}


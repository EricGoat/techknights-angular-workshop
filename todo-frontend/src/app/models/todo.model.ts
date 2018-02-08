export interface ITodo {
  title: string,
  isCompleted: boolean,
  completedAt: Date
}

export class Todo implements ITodo {
  constructor(public title: string,
              public isCompleted: boolean,
              public completedAt: Date) {
    this.title = title;
    this.isCompleted = isCompleted;
    this.completedAt = completedAt;
  }
}


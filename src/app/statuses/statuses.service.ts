import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class StatusesService {

  // Flag to see if status update is in progress
  private inProgress = false;
  private reactions = ['like', 'love', 'dislike'];

  // All the statuses available
  public statuses: FirebaseListObservable<any[]>;

    // The maimum length and minimum length of a status
    public maxLength = 500;
    public minLength = 0;

    // Flag that determines if the status text is valid or nah
    public statusTextValid = false;

  constructor(private af: AngularFireDatabase) { }

  post(status: string) {
    if (!this.updating()) {
      this.inProgress = true;
      const payload = {text: status, like: 0, dislike: 0, love: 0, createdAt: {'.sv': 'timestamp'}};
      this.statuses.push(payload).then( snapshot => {
        this.inProgress = false;
      });
    }
  }

  react(reaction: string, status) {
    if (~this.reactions.indexOf(reaction)) {
      const reactions = {}
      const count = isNaN(parseInt(status[reaction])) ? 0 : parseInt(status[reaction]);
      reactions[reaction] = count + 1;
      this.statuses.update(status.$key, reactions);
    }
  }

  recent(amount: number): FirebaseListObservable<any[]> {
    return this.statuses = this.af.list('/statuses').map(arr => arr.reverse()) as FirebaseListObservable<any[]>;
  }

  valid(status: string): boolean {
    return status.length >= this.minLength && status.length <= this.maxLength;
  }

  updating(): boolean {
    return this.inProgress;
  }

}

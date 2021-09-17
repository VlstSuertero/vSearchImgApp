import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkStorageService {

  public stream$?: BehaviorSubject<string[]>;

  private readonly key = 'bookmarks'
  private readonly separator = ','

  constructor() {
  }

  private get bookmarks() {
    return (localStorage.getItem(this.key) || '').split(this.separator).filter(v => v);
  }

  private set bookmarks(values: string[]) {
    localStorage.setItem(this.key, values.join(this.separator));
    if (this.stream$) {
      this.stream$.next(this.bookmarks)
    }
  }

  bookmarks$(): Subject<string[]> {
    if (!this.stream$) {
      this.stream$ = new BehaviorSubject<string[]>(this.bookmarks);
    }
    return this.stream$
  }

  add(id: string): void {
    this.bookmarks = [...this.bookmarks, id]
  }

  remove(id: string): void {
    this.bookmarks = this.bookmarks.filter(value => value != id)
  }
}

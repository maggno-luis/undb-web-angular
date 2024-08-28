import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
    private searchResultsSubject = new BehaviorSubject<any[]>([]);
    searchResults$ = this.searchResultsSubject.asObservable();

    setSearchResults(results: any[]): void {
    this.searchResultsSubject.next(results);
  }
}
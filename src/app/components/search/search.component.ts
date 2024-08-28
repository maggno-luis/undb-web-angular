import { Component, EventEmitter, Output } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MovieService } from '../../services/movie.service';
import { SearchService } from '../../services/search.service';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [MdbFormsModule, CardComponent, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchInputComponent {

  @Output() searchResults = new EventEmitter<any[]>();

  constructor(
    private movieService: MovieService,
  ){}

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    if (query) {
      this.movieService.getMovieByName(query).subscribe(results => {
        console.log("passou no search components", results)
        this.searchResults.emit(results);
      });
    } else {
      this.searchResults.emit([]);
    }
  }

}

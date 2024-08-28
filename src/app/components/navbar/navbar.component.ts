import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  searchResults: any[] = [];

  constructor(
    private movieService: MovieService,
    private searchService: SearchService
  ){}

  search(event: Event){
    const inputElement = event.target as HTMLInputElement; 
    const query = inputElement?.value;

    if (query && query.length > 2) {
      this.movieService.getMovieByName(query).subscribe(response => {
        this.searchService.setSearchResults(response.results);
      });
    }
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RatingComponent } from '../../components/rating/rating.component'; 
import { CardComponent } from "../../components/card/card.component";
import { SearchInputComponent } from '../../components/search/search.component';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NavbarComponent,
    CardComponent,
    SearchInputComponent,
    CommonModule,
    RatingComponent,
    MovieCardComponent
],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  movies: any[] = [];

  handleSearchResults(response: any): void {
    if (response && Array.isArray(response.results)) {
      this.movies = response.results;
    } else {
      this.movies = [];
    }
  }
}

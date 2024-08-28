import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { RatingComponent } from "../rating/rating.component";
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  @Input() movie: any;

  movies: Movie[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  searchResults: any[] = [];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.loadMovies(this.currentPage);
    this.searchService.searchResults$.subscribe(results => {
      this.searchResults = results;
    });
  }


  goToDetails(id: number) {
    console.log('Redirecionando para o ID do filme:', id);
    this.router.navigate(['/movie', id]);
  }

  loadMovies(page: number): void {
    this.movieService.getMovies(page).subscribe(response => {
      this.movies = response.results;
      this.totalPages = response.total_pages;
      this.scrollToTop();
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadMovies(this.currentPage);
    }
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}

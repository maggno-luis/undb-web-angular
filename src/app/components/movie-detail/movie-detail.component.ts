import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit{

  movie: any = {};
  formattedReleaseDate!: Date;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ){}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    if(movieId){
      this.movieService.getMovieDetails(movieId).subscribe(
        data => {
          console.log("Dados recebidos: ", data)
          this.movie = data;
          this.formattedReleaseDate = new Date(this.movie.release_date);
        },error => {
          console.error('Erro ao carregar os dados: ', error);
          
        }
      );
    }
  }

}

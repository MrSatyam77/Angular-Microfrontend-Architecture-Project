import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-list';
  movies = [
    {
      id: 1,
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg',
    },
    {
      id: 2,
      title: 'Inception',
      poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg',
    },
    {
      id: 3,
      title: 'Interstellar',
      poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
    },
    {
      id: 4,
      title: 'The Matrix',
      poster: 'https://m.media-amazon.com/images/I/51EG732BV3L.jpg',
    },
    {
      id: 5,
      title: 'Avatar',
      poster: 'https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg',
    },
    {
      id: 6,
      title: 'Avengers: Endgame',
      poster: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg',
    },
    {
      id: 7,
      title: 'Titanic',
      poster: 'https://m.media-amazon.com/images/I/71y5Z8C4pHL._AC_SL1181_.jpg',
    },
    {
      id: 8,
      title: 'Joker',
      poster: 'https://m.media-amazon.com/images/I/71vZypO+J8L._AC_SL1178_.jpg',
    },
    {
      id: 9,
      title: 'Spider-Man: No Way Home',
      poster: 'https://m.media-amazon.com/images/I/91qvX9xS9FL._AC_SL1500_.jpg',
    },
    {
      id: 10,
      title: 'Guardians of the Galaxy Vol. 3',
      poster: 'https://m.media-amazon.com/images/I/91ZP4r8qHCL._AC_SL1500_.jpg',
    },
  ];

  checkavailability(movieid: number) {
    console.log('Movie selected with ID:', movieid);
    window.dispatchEvent(new CustomEvent('movieSelected', { detail: movieid }));
  }
}

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ticket-availability';
  movieid: number | null = null;
  availability: any[] = [43,212,56,78,90,34,120,89,150,200];
  availableTickets: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  getAvailability() {
    this.availableTickets = this.availability[this.movieid! - 1]; 
  }

  ngOnInit(): void {
    window.addEventListener('movieSelected', (event: Event) => {
      console.log('event', event);
      const customEvent = event as CustomEvent;
      this.movieid = customEvent.detail;
      console.log('Received movie ID:', this.movieid);
      this.getAvailability();
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('movieSelected', (event: Event) => {});
  }
}

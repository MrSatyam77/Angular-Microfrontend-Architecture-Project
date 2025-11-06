import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MicroFrontendService } from './micro-frontend.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'micro-fontend-demo';

  @ViewChild('movieList', {read: ViewContainerRef, static: true}) listContainer!: ViewContainerRef;
  @ViewChild('ticketAvailability', {read: ViewContainerRef, static: true}) ticketContainer!: ViewContainerRef;

  private listComponentRef: ComponentRef<any> | null = null;
  private availabilityComponentRef: ComponentRef<any> | null = null;


  constructor(private microFrontendService: MicroFrontendService) {}

  async ngOnInit() {
    try {
     const listModule = await this.microFrontendService.loadAppRemoteModule(4201, 'movie-list');
     console.log('List module loaded:', listModule);
     this.listContainer.clear();
     // Access the AppComponent from the module
     const MovieListComponent = (listModule as any).AppComponent;
     if (!MovieListComponent) {
       throw new Error('AppComponent not found in movie-list module');
     }
     this.listComponentRef = this.listContainer.createComponent(MovieListComponent);

     const availabilityModule = await this.microFrontendService.loadAppRemoteModule(4202, 'ticket-availability');
     console.log('Availability module loaded:', availabilityModule);
     this.ticketContainer.clear();
     const TicketComponent = (availabilityModule as any).AppComponent;
     if (!TicketComponent) {
       throw new Error('AppComponent not found in ticket-availability module');
     }
     this.availabilityComponentRef = this.ticketContainer.createComponent(TicketComponent);

     this.listComponentRef.changeDetectorRef.detectChanges();
     this.availabilityComponentRef.changeDetectorRef.detectChanges();
    } catch (err) {
      console.error('Error loading movie list module', err);
    }
  }

  ngOnDestroy(): void {
    if (this.listComponentRef) {
      this.listComponentRef.destroy();
    }
     if (this.availabilityComponentRef) {
      this.availabilityComponentRef.destroy();
    }
    
  }
}

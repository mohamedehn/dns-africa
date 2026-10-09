import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';
import { CursorComponent } from './shared/components/cursor/cursor';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CursorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    inject(SeoService).init();
  }
}

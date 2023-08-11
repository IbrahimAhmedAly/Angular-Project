import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];

  constructor(private Wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.Wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    });
  }
}

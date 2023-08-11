import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Tree',
      imgUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      imgUrl: 'assets/biking.jpeg',
      username: 'biking-11',
      content: 'I did some biking today',
    },
  ];
}

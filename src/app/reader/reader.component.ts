import { Component, OnInit } from '@angular/core';
import { FeedClientService } from '../services/feed-client.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  currentWord: string = "";

  constructor(private feedClient: FeedClientService) {}

  ngOnInit() {
    //this.setCurrentWord();
    let currentIndex = 1;
    this.feedClient.getFeed("https://danaepp.com/feed").subscribe(article => {
      console.log(article)
      let words = article.message.split(" ")
      console.log(words)
      setInterval(() => {
        this.currentWord = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
      }, 300);
    });
  }

}

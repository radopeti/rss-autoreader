import { Component, OnInit } from '@angular/core';
import { FeedClientService } from '../services/feed-client.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  currentWord: string = "";
  private words : Array<string> = []
  private currentIndex = 0;
  private isPlaying : boolean = false;
  private intervalId : any = null;

  constructor(private feedClient: FeedClientService) {}

  ngOnInit() {
    this.feedClient.getFeed("https://danaepp.com/feed").subscribe(article => {
      this.words = article.message.split(" ");
    });
  }

  start() {
    if (this.isPlaying) return;

    this.isPlaying = true;
    console.log("started")
    this.intervalId = setInterval(() => {
      this.currentWord = this.words[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.words.length;
      console.log(this.isPlaying)
    }, 300);
  }

  stop() {
    console.log("stop")
    this.isPlaying = false;
    clearInterval(this.intervalId)
  }

}

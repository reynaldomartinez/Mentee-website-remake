import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.createTimeline();
  }

}

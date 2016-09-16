import { Component, OnInit } from '@angular/core';
import {Page} from 'ui/page';
import {ClarifaiService} from '../../services/clarifai.service';

@Component({
  moduleId: module.id,
  selector: 'cf-tags-page',
  templateUrl: 'tags.page.html',
  styleUrls: ['tags.page.css']
})
export class TagsPage implements OnInit {

  progressValue: number = 0;
  intervalId: number;
  imageUrl: string;
  tags: string[];

  constructor(clarifaiService: ClarifaiService, page: Page) {
    page.actionBar.title = 'API';

    // Get the url of an image
    clarifaiService.getRandomImageUrl()
      // set it as the src of the <Image />
      .do(imageUrl => this.imageUrl = imageUrl)
      // tag it
      .flatMap(imageUrl => clarifaiService.tag(imageUrl))
      // set the tags array
      .subscribe(
      tags => {
        this.tags = tags;
        clearInterval(this.intervalId);
      },
      error => console.error(error)
      );
  }

  ngOnInit() {
    this.intervalId = setInterval(() => this.progressValue += 4, 50);
  }
}

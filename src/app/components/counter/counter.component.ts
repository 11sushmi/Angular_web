import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  constructor(
    public counterService: CounterService,
    private postService: PostService
  ) {
    this.postService.getPosts().subscribe((x) => console.log(x));
  }

  onIncrement() {
    this.counterService.count++;
  }
}

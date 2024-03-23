import { Component, Input } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.scss'
})
export class BlogItemComponent {
  @Input() blog: Blog;

  constructor() {
    this.blog = {} as Blog;
  }

  editBlog(id: number): void {
    console.log(`Editing blog: ${id}`)
  }

  deleteBlog(id: number): void {
    console.log(`Deleting blog: ${id}`)
  }
}

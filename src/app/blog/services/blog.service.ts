import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = [
    {
      id: 1,
      title: 'There Will Be Blood',
      description: 'A race for all the water in the world.',
      author: 'Juan Dela Cruz',
      comments: ['Great blog post.', 'Very informative.', 'Nice writing.']
    },
    {
      id: 2,
      title: 'The Limitation Game',
      description: 'Is there a limit to the water suppy of the world?',
      author: 'Juan Dela Cruz',
      comments: ['Thank you for so many new insights.']
    },
    {
      id: 3,
      title: 'Quenched',
      description: 'Is water the new gold?',
      author: 'Juan Dela Cruz',
      comments: ['This was eye opening.', 'Good job, Sir.']
    }
  ]

  constructor() { }

  getBlogs(): Blog[] {
    return this.blogs;
  }

  editBlog(id: number): void {
    console.log(`Editing blog: ${id}`)
  }

  deleteBlog(id: number): void {
    console.log(`Deleting blog: ${id}`)
  }
}

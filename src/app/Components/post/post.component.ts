import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comments } from 'src/app/Models/comments.models';
import { posts } from 'src/app/Models/posts.models';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appService: AppService){}


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.appService.getpost(id)
          .subscribe({
            next: (Response) => {
              this.actual_post = Response;
            }
          })
          this.appService.getPhoto(id)
          .subscribe({
            next: (Response) => {
              this.actual_post.photo = Response;
            }
          })
          this.appService.getComments(id)
          .subscribe({
            next: (Response) =>{
              this.post_comments = Response;
            }
          })
        }
      }
    })
  }


  actual_post: posts = {
    id: '',
    userId: '',
    title: '',
    body: '',
    photo: {
      albumId: '',
      id: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    },
    comments: [],
    user: {
      id: '',
    name: '',
    username: '',
    email: '',
    address:{
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo:{
            lat: '',
            lng: '',
        }
    }
    }
  }
  post_comments: comments[] = [];
}

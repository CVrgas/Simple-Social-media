import { Component, OnInit } from '@angular/core';
import { photos } from 'src/app/Models/photos.models';
import { posts } from 'src/app/Models/posts.models';
import { users } from 'src/app/Models/users.models';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor( private appservice: AppService) {}

  items: posts[] = [];
  
  ngOnInit(): void {
    this.appservice.getAll().subscribe({
      next: (response) => {
        this.items = response;
        this.items.forEach(element => {
          this.appservice.getPhoto(element.id)
          .subscribe({
            next: (response) => {
              element.photo = response;
            }
          })
        });
        this.items.forEach(element => {
          this.appservice.getComments(element.id)
          .subscribe({
            next: (response) => {
              element.comments = response;
            }
          })
        });
        this.items.forEach(element => {
          this.appservice.getUser(element.userId)
          .subscribe({
            next: (response) => {
              element.user = response;
            }
          })
        });
      }
    })
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  go() {
    this.router.navigate(['some'])
  }
}

import { Component, OnInit } from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {PostSnapService} from "../services/post-snap.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './post-snap-list.component.html',
  styleUrls: ['./post-snap-list.component.scss']
})
export class PostSnapListComponent implements OnInit {
  postSnaps!: FaceSnapModel[];
  constructor(private faceSnapService: PostSnapService) { }

  ngOnInit(): void {
    this.postSnaps = this.faceSnapService.getAllPosts();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap.model';
import {PostSnapService} from "../services/post-snap.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-face-snap',
  templateUrl: './post-snap.component.html',
  styleUrls: ['./post-snap.component.scss']
})
export class PostSnapComponent implements OnInit {
  @Input() faceSnapModel!: FaceSnapModel;
  onLike!:boolean;

  constructor(private postSnapService : PostSnapService, private router: Router) {
  }

  ngOnInit(): void {
    this.onLike = false;
  }
  likeDislike(){
    if (!this.onLike){
      this.postSnapService.snapPost(this.faceSnapModel.id,"like");
      this.onLike=true;
      //change color on blue
    }else{
      this.postSnapService.snapPost(this.faceSnapModel.id,"dislike");
      this.onLike=false;
    }
  }
  onSingle(){
    this.router.navigateByUrl('posts/'+this.faceSnapModel.id);
  }

}

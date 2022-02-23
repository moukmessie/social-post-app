import {Component,  OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";

import {ActivatedRoute} from "@angular/router";
import {PostSnapService} from "../services/post-snap.service";

@Component({
  selector: 'app-single-post-snap',
  templateUrl: './single-post-snap.component.html',
  styleUrls: ['./single-post-snap.component.scss']
})
export class SinglePostSnapComponent implements OnInit {

  faceSnapModel!: FaceSnapModel;
  onLike!:boolean;

  constructor(private faceSnapService : PostSnapService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onLike = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnapModel = this.faceSnapService.getPostById(faceSnapId);
  }
  likeDislike(){
    if (!this.onLike){
      this.faceSnapService.snapPost(this.faceSnapModel.id,"like");
      this.onLike=true;
      //change color on blue
    }else{
      this.faceSnapService.snapPost(this.faceSnapModel.id,"dislike");
      this.onLike=false;
    }
  }

}

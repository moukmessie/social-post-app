import {Component,  OnInit} from '@angular/core';
import {FaceSnapModel} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnapModel!: FaceSnapModel;
  onLike!:boolean;

  constructor(private faceSnapService : FaceSnapService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.onLike = false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnapModel = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  likeDislike(){
    if (!this.onLike){
      this.faceSnapService.faceSnapPost(this.faceSnapModel.id,"like");
      this.onLike=true;
      //change color on blue
    }else{
      this.faceSnapService.faceSnapPost(this.faceSnapModel.id,"dislike");
      this.onLike=false;
    }
  }

}

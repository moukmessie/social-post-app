import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snap.model';
import {FaceSnapService} from "../services/face-snap.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnapModel!: FaceSnapModel;
  onLike!:boolean;

  constructor(private faceSnapService : FaceSnapService, private router: Router) {
  }

  ngOnInit(): void {
    this.onLike = false;
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
  onSingle(){
    this.router.navigateByUrl('facesnaps/'+this.faceSnapModel.id);
  }

}

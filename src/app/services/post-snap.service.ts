import { Injectable } from "@angular/core";
import {FaceSnapModel} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class PostSnapService {
  faceSnaps:FaceSnapModel[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Description test',
      createdDate: new Date(),
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      snaps: 6
    },
    {
      id: 2,
      title: 'Natural',
      description: 'Miracle de la nature',
      createdDate: new Date(),
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      snaps: 0,
      location: 'Congo'
    },

    {
      id: 3,
      title: 'Best Live',
      description: 'La vie est belle',
      createdDate: new Date(),
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      snaps: 360,
      location: 'Paris'
    }];


  getAllPosts(): FaceSnapModel[] {
    return this.faceSnaps;
  }
  getPostById(postId: number): FaceSnapModel {
    const post = this.faceSnaps.find(postSnap=>postSnap.id === postId);
    if (!post){
      throw new Error("snap not found!")
    }else{
      return post;
    }
  }

  snapPost(postId: number, clickType: 'like' | 'dislike'): void {
    const post = this.getPostById(postId);
    clickType === 'like' ? post.snaps++ : post.snaps--;
  }
}

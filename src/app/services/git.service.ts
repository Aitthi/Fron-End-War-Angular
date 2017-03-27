import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Repos } from '../models/Repos.model';

@Injectable()
export class GitService {

  private API_PATH = 'https://api.github.com/repos';
  constructor(private _http:Http) { 
  }

  getRepo(Repos):Observable<any>{
    return this._http.get(`${this.API_PATH}/${Repos}`).map((res:Response )=> <Repos[]> res.json())
  }

  getStargazers(Repos){
    if(Repos == "angular"){
      Repos = "angular/angular"
    }else if(Repos == "react"){
      Repos = "facebook/react"
    }else if(Repos == "vue"){
      Repos = "vuejs/vue"
    }
    return this._http.get(`${this.API_PATH}/${Repos}/stargazers?per_page=100`).map(res => res.json())
  }

}

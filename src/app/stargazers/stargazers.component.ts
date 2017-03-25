import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-stargazers',
  templateUrl: './stargazers.component.html',
  styleUrls: ['./stargazers.component.css']
})
export class StargazersComponent implements OnInit {

  info:any;

  constructor(private _router:ActivatedRoute, private _git:GitService) {
  
  }

  ngOnInit() {
    let ac = this._router.snapshot.params['ac']
    this._git.getDataUser(ac).subscribe(data =>{
      this.info = data
    })  
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { GitService } from '../services/git.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  
  @Input() Repo:string;

  info:any;

  constructor(private _git:GitService) {
    this.info = {
        name : "Loading....",
        description:"",
        stargazers_count: 0,
        open_issues: 0,
        forks: 0,
        owner: {},        
      }
  }

  ngOnInit() {
    this._git.getRepo(this.Repo).subscribe(data =>{
      this.info = data
    })
    
  }

}

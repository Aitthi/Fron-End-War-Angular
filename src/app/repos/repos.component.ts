import { Component, OnInit, Input } from '@angular/core';
import { GitService } from '../services/git.service';
import { Repos } from '../models/Repos.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Repos[];

  @Input() Repo: string;

  constructor(private _git: GitService) {
  }

  ngOnInit() {
    this._git.getRepo(this.Repo).subscribe(
      repos => this.repos = repos,
      err => console.log(err)
    )



  }

}

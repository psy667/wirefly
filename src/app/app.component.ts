import {Component} from '@angular/core';
import {APIService} from "./API.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wirefly';

  constructor(
    private apiService: APIService,
    private router: Router
  ) {}

  handleCreateRoom(){
    const id = Math.random().toString(36).split('.')[1].slice(0, 6);

    this.apiService.CreateRoom({
      id
    }).then(() => {
      this.router.navigate([id]);
    })
  }
}

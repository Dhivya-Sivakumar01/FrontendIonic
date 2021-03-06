import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
user:any;
  constructor(private authService: AuthenticationService) {}
  async ngOnInit() {
    this.user = await this.authService.getUserInfo();
}
// async logout() {
//   await this.authService.logout();
// }
logout(): void {
  window.location.assign(environment.logout);
}

}

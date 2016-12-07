import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[]
  cachedUsers: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      this.users = users;
      this.cachedUsers = users;
    });
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent) {
    const MIN_TERM_LENGTH = 3;
    const term = searchEvent.target.value || '';
    const lengthIsValid = term.trim().length >= MIN_TERM_LENGTH;

    if (lengthIsValid)
      this.githubUsers.searchUsers(term).subscribe(users => this.users = users);
    else
      this.users = this.cachedUsers;
  }  
}

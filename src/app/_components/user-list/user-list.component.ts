import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '@app/_services/user.service';
import { User } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less'],
})
export class UserListComponent implements OnInit {

  UserName: string = '';
  UserId: string = '';
  LastConnection: string = '';

  @Input() user: User | undefined;

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    console.log(this.user);
    if (this.user) {
      this.UserName = this.user.Name;
      this.UserId = this.user.Id;
      this.LastConnection = this.user.LastLoginDate
        ? new Date(this.user.LastLoginDate).toLocaleString()
        : '';
    }
  }

  Delete() {
    this.userService.deleteUser(this.UserId);
    console.log('Click');
  }
}

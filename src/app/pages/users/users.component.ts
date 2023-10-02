import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '@app/interfaces/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  creationSuccess = false;
  
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    const apiKey = '0dfbdf14ce5f43498cf2ba5bb3d0ddca'; // Reemplaza con tu API key
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  onSubmit() {
    const { name, password } = this.userForm.value;

    this.userService
      .newUser(name, password)
      .pipe(
        catchError((error) => {
          console.error('Error al crear el usuario', error);
          // Manejar errores según sea necesario
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response && response.success) {
          console.log('Usuario creado exitosamente');
          this.creationSuccess = true;
          this.userForm.reset();
        } else {
          console.error('Error al crear el usuario');
          this.creationSuccess = false;
        }
      });
  }
}

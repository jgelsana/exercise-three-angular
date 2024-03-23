import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  user: User = {} as User;

  submit(user: User): void {
    console.log(`User added: ${user.name}` )
  }
}

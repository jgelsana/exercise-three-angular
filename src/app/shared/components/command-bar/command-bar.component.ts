import { Component } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {

  constructor() { }

  add(): void{
    console.log('Add button clicked');
  }

  deleteAll(): void {
    console.log('Delete All button clicked');
  }

}

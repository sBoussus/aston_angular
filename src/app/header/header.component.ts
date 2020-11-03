import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = 'header component';
  altText: string = 'photo d\'un loup';
  srcPath: string = 'https://static.nationalgeographic.fr/files/styles/image_3200/public/01_booktalk_wolves_0.jpg?w=1600&h=900';
  authenticated: boolean = false;
  options: string[] = ['red', 'blue', 'green'];
  borderColor: string = 'black';

  constructor() {
    this.updateUI();
  }

  updateUI() {
    setTimeout(
      () => {
        console.log('Update UI');
        this.title += ' updated !';
        this.authenticated = !this.authenticated;
        this.options.push('New option');
      }, 1000
    );
  }

  onChange(event: any) {
    let value: string = event.target.value;
    console.log(value);
    if (value === 'New option') {
      this.borderColor = '#ff6633';
    } else {
      this.borderColor = value;
    }
  }

}

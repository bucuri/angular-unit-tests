import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-custom-text',
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.scss']
})
export class CustomTextComponent extends BaseComponent implements OnInit {

  message = $localize`Hello, World!`;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.doStuff();
  }

}

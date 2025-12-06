import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";              
  @Input() secondaryBtnText: string = ""; 
  @Input() primaryBtnText: string = "";
  @Input() disabelPrimaryBtn: boolean= true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();


  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }


}

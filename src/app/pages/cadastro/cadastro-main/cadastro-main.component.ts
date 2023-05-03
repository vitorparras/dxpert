import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-cadastro-main',
  templateUrl: './cadastro-main.component.html',
  styleUrls: ['./cadastro-main.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CadastroMainComponent {

  constructor(public spinnerService: SpinnerService) { }


  
}


  
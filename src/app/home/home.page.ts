import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router:Router) {
    this.plano = [];
  }

  plano;

  ngOnInit() {}

  ionViewDidEnter() {
    this.plano = [];

    const banco = localStorage.length;

    for (let index = 0; index < banco; index++) {
      const chave = localStorage.key(index);
      const vetorPlanos = localStorage.getItem(chave);
      const planos = JSON.parse(vetorPlanos);
      this.plano.push(planos);

    }
    
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }

  salvar(form) {
    console.log(form.value)
    const planejamento = JSON.stringify(form.value);
    const nomePlano = form.value.nome;

    localStorage.setItem(nomePlano, planejamento);

    form.reset();

    this.nav.back();
  }

}

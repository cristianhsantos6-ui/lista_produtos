import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})

export class ListaProdutos {
  id_produto: number = 0;
  descricao_produto: string = '';
  valor_unitario: number = 0.0;


  addItem() {
    console.log(this.descricao_produto, '<->', this.valor_unitario)
  }

}


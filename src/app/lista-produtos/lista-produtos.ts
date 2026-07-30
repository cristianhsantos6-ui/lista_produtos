import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Item} from './item';

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

  listaItens: Item[] = [];

  addItem() {
    console.log(this.descricao_produto, '<->', this.valor_unitario)
  //INSTANCIANDO A CLASSE ITEM
  let item = new Item()
  item.idProduto = this.listaItens.length + 1
  item.descricaoProduto = this.descricao_produto
  item.valorUnitario = this.valor_unitario


  this.listaItens.push(item)

  this.descricao_produto = ''
  this.valor_unitario = 0.0
}

limparTudo() {
  this.listaItens = []
  this.descricao_produto = '';
  this.valor_unitario = 0.0;
}
}


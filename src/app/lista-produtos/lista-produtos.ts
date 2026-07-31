import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from './item';

@Component({
  selector: 'app-lista-produtos',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  id_produto: number = 0;
  descricao_produto: string = '';
  valor_unitario: number = 0.0;

  listaItens: Item[] = [];

  addItem() {
    console.log(this.descricao_produto, '<->', this.valor_unitario);
    
    let item = new Item();
    item.idProduto = this.listaItens.length + 1;
    item.descricaoProduto = this.descricao_produto;
    item.valorUnitario = this.valor_unitario;
    item.statusSelecionado = false; // Usa a propriedade com o nome correto!

    this.listaItens.push(item);

    this.descricao_produto = '';
    this.valor_unitario = 0.0;
  }
  limparTudo() {
    // Mantém apenas os itens que NÃO estão selecionados
    this.listaItens = this.listaItens.filter(item => !item.statusSelecionado);
  
    // Opcional: limpa os campos de input do formulário
    this.descricao_produto = '';
    this.valor_unitario = 0.0;
  }
}
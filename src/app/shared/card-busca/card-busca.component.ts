import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
 @Input() imagem! : string
 @Input() destino! : string
 @Input() preco! : number

//  id : number,
//  destino: string,
//  imagem: string,
//  preco: number
}

# Correção do Cálculo de Subtotal e Total do Carrinho

Durante a finalização do projeto ensinado pelo Felipão, percebi um detalhe importante no funcionamento do carrinho de compras: ao aumentar ou diminuir a quantidade de um item, o valor do **subtotal** daquele item e o **total do carrinho** não eram atualizados corretamente.

## Problema Identificado

O subtotal de cada item era calculado de forma estática, ou seja, o valor era definido inicialmente e não reagia às mudanças na quantidade dos itens. Como consequência, mesmo alterando a quantidade no carrinho, o valor total permanecia incorreto.

## Solução Implementada

Uma das soluções que testei e funcionou foi ajustar o cálculo do subtotal diretamente na função `createItem()` dentro do arquivo `item.js`.

### Antes:

```js
subtotal: () => price * quantity
```

### Depois:

```js
subtotal() => this.price * this.quantity
```

## Por que usei **this**

Usei o this para que a função recebesse os valores e fizesse o recalculo automaticamente, sem o this a função ficava estática e só calculava o valor inicial.

## Resultado

Após essa alteração, o subtotal de cada item passou a ser recalculado corretamente, refletindo no total do carrinho e melhorando a funcionalidade geral da aplicação.
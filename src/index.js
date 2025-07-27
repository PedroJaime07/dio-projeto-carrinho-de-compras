import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishiList = []

console.log('Welcome to the your Shopee Cart!')

// cria itens
const item1 = await createItem('hotwheels ferrair', 20.99, 1)
const item2 = await createItem('hotwheels lamborghini', 39.99, 3)

// adicinona dois itens no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// remove um item do carrinho
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)


// deleta dois itens do carrinho
// await cartService.deleItem(myCart, item2.name)
// await cartService.deleItem(myCart, item1.name)

// mostrar itens do carrinho
await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)
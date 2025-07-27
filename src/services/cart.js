import createItem from "./item.js"

// adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item)
}

// calcular o total
async function calculateTotal(userCart) {
    console.log('Shopee cart total is:')
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`R$ ${total.toFixed(2)}`)

}

// deletar item do carrinho
async function deleItem(userCart, name) {
    const index = userCart.findIndex(e => e.name === name)

    if(index !== -1) {
        userCart.splice(index, 1)
    }
}

// remover um item só (diminui umm item)
async function removeItem(userCart, item) {
    // encontrar o indice do item
    const indexFound = userCart.findIndex(e => e.name === item.name)

    // caso não encontre o index
    if(indexFound == -1) {
        console.log('Item não encontrado')
        return
    }

    // se a quantidade do item > 1 subtrai um item da quantidade, e deleta o item se a quantidade do item = 1 
    if(userCart[indexFound].quantity > 1) {
       userCart[indexFound].quantity -= 1
    } else if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1)
    }
}
 
// mostrar os itens do carrinho
async function displayCart(userCart) {
    console.log('Shopee cart list:')
    userCart.forEach((e, index) => console.log(`${index + 1}: ${e.name} | R$ ${e.price} | Qtd: ${e.quantity} | Subtotal = R$ ${e.subtotal()}`))
}

export {
    addItem,
    calculateTotal,
    deleItem,
    removeItem,
    displayCart,
}
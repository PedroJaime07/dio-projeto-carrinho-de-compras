function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}    

const lista = []
const name = 'hotwheels lamborghini'
const price = 39.99
let quantity = 3
quantity -= 1

lista.push(createItem(name, price, quantity))

// lista[0].quantity -= 2

console.log(lista, lista[0].subtotal());

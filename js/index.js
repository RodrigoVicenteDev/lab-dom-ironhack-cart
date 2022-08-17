// ITERATION 1

function updateSubtotal(product) {
 console.log('Calculating subtotal, yey!');
 let price = product.querySelector('.price span').innerText
 let quantity = product.querySelector('.quantity input').value
 let subt = product.querySelector('.subtotal span')
 let subtotal = Number(price) * Number(quantity)
 subt.innerText = subtotal
 return subtotal
 }

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const produtos = document.querySelectorAll('.product');
  console.log(produtos[1])
 // updateSubtotal(singleProduct);
 let pretotal = 0
  produtos.forEach((element)=>{
    pretotal += updateSubtotal(element)
    

  })
  
  console.log(pretotal)

  let subtotal = document.querySelector('#total-value span')
  console.log(subtotal)
  subtotal.innerText = pretotal
  
}

// ITERATION 4
let butonsremove = document.querySelectorAll(".btn-remove")
butonsremove.forEach( (element)=> {
  element.addEventListener( 'click',removeProduct )
  
})

function removeProduct(event) {
  
  const target = event.currentTarget;
  const targetdelet = target.parentNode.parentNode
   let deletar = document.querySelector('tbody')
  deletar.removeChild(targetdelet) 
  console.log('The target in remove is:', target.parentNode.parentNode);
  calculateAll()
   
}

// ITERATION 5
let btnadd =document.getElementById('create')
btnadd.addEventListener('click',createProduct )
function createProduct() {
let pai = document.querySelector('tbody')
let valuenome =document.getElementById('valuenome').value
let valuevalor =document.getElementById('valuevalor').value
let criador = document.createElement('tr')

  criador.classList.add('product')
  criador.innerHTML = `<td class="name">
            <span>${valuenome}</span>
          </td>
          <td class="price">$<span>${valuevalor}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`
   pai.appendChild(criador)
  
}

window.addEventListener('load', () => {
  
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  
});

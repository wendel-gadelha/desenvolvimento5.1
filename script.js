let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'

let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')


listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
`
listaOrdenada.innerHTML = `
  <li><a href="https://best.aliexpress.com">Aliexpress</a></li>
  <li><a href="https://shopee.com.br">Shopee</a></li>
  <li><a href="https://www.globo.com">Globo.com</a></li>
`
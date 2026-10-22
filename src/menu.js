const MENU = [
  { nome: 'Brasa Clássico', descricao: 'Hambúrguer artesanal, queijo cheddar, cebola caramelizada, alface e molho especial no pão brioche.', preco: 'R$ 29,90' },
  { nome: 'Bosque Suíço', descricao: 'Hambúrguer artesanal, queijo suíço, cogumelos salteados e maionese de ervas.', preco: 'R$ 39,90' },
  { nome: 'Batatas da Floresta', descricao: 'Batatas crocantes com alecrim, páprica e molho cremoso da casa.', preco: 'R$ 16,90' },
  { nome: 'Névoa Cítrica', descricao: 'Limonada com maracujá, gelo e folhas de hortelã.', preco: 'R$ 10,90' },
  { nome: 'Brownie da Cabana', descricao: 'Brownie de chocolate servido morno com uma bola de sorvete de baunilha.', preco: 'R$ 18,90' }
];

export function renderMenu() {
  const content = document.getElementById('content');
  if (!content) return;

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  MENU.forEach(item => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('menu-item');

    const nome = document.createElement('h3');
    nome.classList.add('item-nome');
    nome.textContent = item.nome;

    const descricao = document.createElement('p');
    descricao.classList.add('item-descricao');
    descricao.textContent = item.descricao;

    const preco = document.createElement('span');
    preco.classList.add('item-preco');
    preco.textContent = item.preco;

    cardItem.append(nome, descricao, preco);
    menuContainer.appendChild(cardItem);
  });

  content.appendChild(menuContainer);
}

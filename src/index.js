import './styles.css';

import { renderHome } from './home.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';

const content = document.querySelector('#content');
const abas = document.querySelectorAll('[data-page]');

const paginas = {
  inicio: renderHome,
  menu: renderMenu,
  contato: renderContact,
};

function carregarPagina(nome) {
  const renderizar = paginas[nome];

  if (!renderizar || !content) return;

  content.replaceChildren();

  renderizar();

  abas.forEach((aba) => {
    if (aba.dataset.page === nome) {
      aba.classList.add('aba-atual');
    } else {
      aba.classList.remove('aba-atual');
    }
  });
}

abas.forEach((aba) => {
  aba.addEventListener('click', (e) => {
    e.preventDefault();

    const pagina = aba.dataset.page;
    carregarPagina(pagina);
  });
});


carregarPagina('inicio');

export function renderHome() {
  const content = document.getElementById('content');
  if (!content) return;

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const titulo = document.createElement('h1');
  titulo.classList.add('home-titulo');
  titulo.textContent = 'Bem-vindo ao Brasa & Bosque';

  const descricao = document.createElement('p');
  descricao.classList.add('home-descricao');
  descricao.textContent = 'Combinamos a rusticidade do fogo com o frescor da floresta. Venha saborear os melhores hambúrgueres artesanais em um ambiente acolhedor e único.';

  const horarios = document.createElement('div');
  horarios.classList.add('home-horarios');
  horarios.innerHTML = `
    <h3>Horário de Funcionamento</h3>
    <p>Terça a Quinta: 18h às 23h</p>
    <p>Sexta a Domingo: 18h às 00h</p>
  `;

  homeContainer.append(titulo, descricao, horarios);
  content.appendChild(homeContainer);
}

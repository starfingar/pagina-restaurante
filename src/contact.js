export function renderContact() {
  const content = document.getElementById('content');
  if (!content) return;

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const endereco = document.createElement('p');
  endereco.classList.add('contact-endereco');
  endereco.textContent = 'Rua das Folhas, 184 — Jardim Aurora, São Paulo – SP';

  const telefone = document.createElement('p');
  telefone.classList.add('contact-telefone');
  telefone.textContent = '(11) 1234-5678';

  const email = document.createElement('p');
  email.classList.add('contact-email');
  email.textContent = 'contato@brasaebosque';

  contactContainer.append(endereco, telefone, email);
  content.appendChild(contactContainer);
}

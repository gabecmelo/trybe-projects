import validator from 'validator';
import './style.css';

const campoDeTexto = document.querySelector('#text-input');
const selector = document.querySelector('#options');
const button = document.querySelector('button');
const result = document.querySelector('p');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const opção = selector.value;

  const validatorArea = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
    senha: validator.isStrongPassword(campoDeTexto.value),
    horário: validator.isTime(campoDeTexto.value),
    url: validator.isURL(campoDeTexto.value),
  };

  if (validatorArea[opção]) {
    if (opção === 'senha' || opção === 'url') {
      result.innerHTML = `<b>${opção.toUpperCase()}</b> válida.`;
    } else {
      result.innerHTML = `<b>${opção.toUpperCase()}</b> válido.`;
    }
  } else if (opção === 'senha' || opção === 'url') {
    result.innerHTML = `<b>${opção.toUpperCase()}</b> inválida, tente novamente.`;
  } else {
    result.innerHTML = `<b>${opção.toUpperCase()}</b> inválido, tente novamente.`;
  }
});

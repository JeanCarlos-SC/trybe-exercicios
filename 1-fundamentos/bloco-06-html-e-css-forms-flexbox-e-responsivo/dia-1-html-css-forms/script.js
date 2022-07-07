const btn = document.getElementById('submit');
const check = document.getElementById('checkbox2');
const inputName = document.getElementById('input-name').value;
const inputEmail = document.getElementById('input-email').value;
const validations = (event) => {
    if (inputName.length < 10 || inputName.length > 40) {
        event.preventDefault();
        alert('Dados Inválidos');
    } else if (inputEmail.length < 10 || inputEmail.lenght > 50) {
        event.preventDefault();
        alert('Dados Inválidos');
    } else if (!check.checked) {
        event.preventDefault();
        alert('È necessário aceitar o uso das imagens para enviar o formulário');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}
btn.addEventListener('click', validations)
function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
// Escreva seu código abaixo.
// 🚀 Exercício 1:
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
// Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
const days = document.getElementById('days');
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const createDays = () => {
    for (let index = 0; index < decemberDaysList.length; index += 1) {
        li = document.createElement('li');
        li.classList.add('day');
        li.innerText = decemberDaysList[index];
        days.appendChild(li);
    }
    const holidays = document.getElementsByClassName('day');
    holidays[25].classList.add('holiday');
    holidays[26].classList.add('holiday');
    holidays[32].classList.add('holiday');
    for (let i = 5; i < decemberDaysList.length; i+= 7) {
        holidays[i].classList.add('friday');
    }
}
createDays();

// 🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
const btnContainer = document.querySelector('.buttons-container');
const createBtn = (feriados) => {
    const btn = document.createElement('button');
    btn.innerText = feriados;
    btn.id = 'btn-holiday';
    btnContainer.appendChild(btn);
}
createBtn('Feriados');

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
const changeColor = () => {
    const days = document.getElementsByClassName('holiday');
    const btn = document.getElementById('btn-holiday');
    btn.addEventListener('click', () => {
        for (let index = 0; index < days.length; index += 1) {
            if (days[index].style.backgroundColor === 'lightgreen'){
                days[index].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            days[index].style.backgroundColor = 'lightgreen';
        }

        }
    })
}
changeColor();

// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
const createBtnFriday = (friday) => {
    const btnF = document.createElement('button');
    btnF.innerText = friday;
    btnF.id = 'btn-friday';
    btnContainer.appendChild(btnF);
}
createBtnFriday('Sexta-feira');

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
const todayIsFriday = () => {
    const days = document.getElementsByClassName('friday');
    const btn = document.getElementById('btn-friday');
    btn.addEventListener('click', () => {
        for (let index = 0; index < days.length; index += 1) {
            if (days[index].style.color === 'red'){
                days[index].style.color = '#777';
        } else {
            days[index].style.color = 'red';
        }

        }
    })
}
todayIsFriday();

// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.
const zoom = () => {
    days.addEventListener('mouseover', (event) => {
        const evento = event.target;
        evento.style.fontSize ='30px';
        evento.style.fontWeight = '600';
    })
    days.addEventListener('mouseout', (event) => {
        const evento = event.target;
        evento.style.fontSize ='20px';
        evento.style.fontWeight = '200';
    })
};
zoom();

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const createTask = (string) => {
    const mytasks = document.querySelector('.my-tasks');
    const span = document.createElement('span');
    span.innerText = string;
    mytasks.appendChild(span);
}
createTask('Cozinhar');

// 🚀 Exercício 8:
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const addLegColor = (cor) => {
    const mytasks = document.querySelector('.my-tasks');
    const div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    mytasks.appendChild(div);
}
addLegColor('red');
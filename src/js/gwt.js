const sorteioTemp = [
    {
        predio: '1',
        lado: 0,
    },
    {
        predio: '2',
        lado: 0,
    },
    {
        predio: '3',
        lado: 0,
    },
    {
        predio: '4',
        lado: 0,
    },
    {
        predio: '5',
        lado: 0,
    },
    {
        predio: '6',
        lado: 0,
    },
    {
        predio: '7',
        lado: 0,
    },
    {
        predio: '8',
        lado: 0,
    },
    {
        predio: '9',
        lado: 0,
    },
    {
        predio: '10',
        lado: 0,
    },
    {
        predio: '11',
        lado: 0,
    },
    {
        predio: '12',
        lado: 0,
    },
]

const botao = document.querySelector('.filtraResultados');
const botao2 = document.querySelector('.limparResultados');

botao2.addEventListener('click', () => {
    window.location.reload();
})

botao.addEventListener('click', () => {
    setTimeout(() => {
        const h2 = document.querySelector('.pickH2');
        h2.classList.add('invisivel');
    }, 2000)
    
    sorteioTemp.forEach(vl => {
        vl.lado = getRandomInt(1, 3)
        vl.lado = converte(vl.lado);
    });
    
    const sorteioTr = document.createElement('tr');

    for(c in sorteioTemp){
        sorteioTr.appendChild(addTd(sorteioTemp[c].lado, c));
    }

    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(sorteioTr);

    const tbodyPai = document.querySelector('tbody');
    tbodyPai.addEventListener('click', function(e){
        e.target.parentNode.remove();
    })
    
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

function converte(numero){
    if(numero === 1){
        return 'A';
    }else {
        return 'B';
    }
};

function addTd(valor, index){
    const predio = document.createElement('td');
    predio.textContent = valor;
    predio.classList.add('fonte');
    if(index % 2 == 0){
        predio.classList.add('corVermelha');
    }else {
        predio.classList.add('corAzul');
    }
    return predio;
}
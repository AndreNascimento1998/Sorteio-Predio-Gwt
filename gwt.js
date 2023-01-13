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

sorteioTemp.forEach(vl => {
    vl.lado = getRandomInt(1, 3)
    vl.lado = converte(vl.lado);
});

sorteioTemp.forEach(vl => {
    console.log(`Prédio ${vl.predio} Lado: ${vl.lado}`);
});
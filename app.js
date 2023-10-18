'use strict'

const pessoas = [


    {
        nome: 'José',
        imagem: 'foto.png',
        texto: 'Vai cmg?',
        contato: 'ZÉ',
        tempo:  '08:15',
        quantidade: '2'
    },
    {
        nome: 'Gabriel',
        imagem: 'foto.png',
        texto: 'ouuu',
        contato: 'Henry',
        tempo:  '06:52',
        quantidade: '4'
    },
    {
        nome: 'Amanda',
        imagem: 'foto.png',
        texto: 'Bom dia!',
        contato: 'BI',
        tempo:  '05:22',
        quantidade: '1'
    },
    {
        nome: 'Leicia',
        imagem: 'foto.png',
        texto: 'cade o roteiro',
        contato: 'let let',
        tempo:  'segunda-feira',
        quantidade: '1'
    },
    {
        nome: 'Elaine',
        imagem: 'foto.png',
        texto: 'não',
        contato: 'MAMIII',
        tempo:  'segunda-feira',
        quantidade: '1'
    },
    {
        nome: 'Flavio',
        imagem: 'foto.png',
        texto: 'ok',
        contato: 'PAI',
        tempo:  'segunda-feira',
        quantidade: '1'
    },
    {
        nome: 'Julia',
        imagem: 'foto.png',
        texto: '👍​',
        contato: 'paivas',
        tempo:  'segunda-feira',
        quantidade: '1'
    },
    {
        nome: 'Gustavo',
        imagem: 'foto.png',
        texto: '📞​❌ ligação perdida​',
        contato: 'gustaboy',
        tempo:  'segunda-feira',
        quantidade: '2'
    },
]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)
document.addEventListener('DOMContentLoaded', function () {
    let imgPrincipal = document.querySelector('.imgPrincipal')
    let titleJogos = document.querySelector('.title-jogos')
    let descJogos = document.querySelector('.desc-jogos')
    let selectSound = document.querySelector('#select-sound')

    // Buttons
    const battleTetris = document.querySelector('.battle-tetris')
    const onePiece = document.querySelector('.one-piece')
    const bobEsponja = document.querySelector('.bob-esponja')
    const windowsXP = document.querySelector('.windows-xp')
    const retro = document.querySelector('.retro')
    const mario = document.querySelector('.mario')
    const naruto = document.querySelector('.naruto')
    const mcqueen = document.querySelector('.mcqueen')
    const barbie = document.querySelector('.barbie')
    const buttons = document.querySelectorAll('button');


    let informacoes = {
        /*Battle Tetris*/
        "imgBattleTetris": "./view/img/battle-tetris.png",
        "titleBattleTetris" : "Battle Tetris",
        "descBattleTetris" : "Feito por Gustavo Gualda, João Paulo e João Luiz",

        // One piece tetris
        "imgOnePiece": "./view/img/battle-tetris.png",
        "titleOnePieceTetris" : "One Piece Tetris",
        "descOnePieceTetris" : "Feito por Nicole, Maria Clara e Raissa",

        // Bob Esponja Tetris
        "imgBobEsponja": "./view/img/battle-tetris.png",
        "titleBobEsponjaTetris" : "Bob Esponja Tetris",
        "descBobEsponjaTetris" : "Feito por Ana Gabrielly, Maria Luisa, Leandro, Luiza e fabiola",

        // Windows XP Tetris 
        "imgWindowsXP": "./view/img/battle-tetris.png",
        "titleWindowsXPTetris" : "Windows XP Tetris ",
        "descWindowsXPTetris" : "Feito por Miguel, Matheus e Pedro",

        // Retrô Tetris 
        "imgRetro": "./view/img/battle-tetris.png",
        "titleRetroTetris" : "Retrô Tetris",
        "descRetroTetris" : "Feito por Gustavo Lima, Gustavo Sachetto, Kaue e Erick",

        // Mario Tetris 
        "imgMario": "./view/img/battle-tetris.png",
        "titleMarioTetris" : "Mario Tetris",
        "descMarioTetris" : "Feito por Myrela, Nicoli, Leonardo e Patrick",

        // Barbie Tetris 
        "imgBarbie": "./view/img/battle-tetris.png",
        "titleBarbieTetris" : "Barbie Tetris",
        "descBarbieTetris" : "Feito por Gisele, Brenda, Kauany e Kírya",

        // McQueen Tetris 
        "imgMcQueen": "./view/img/battle-tetris.png",
        "titleMcQueenTetris" : "McQueen Tetris",
        "descMcQueenTetris" : "Feito por Júlio, Sales, Jhonatas e Ana Júlia",

        // Naruto Tetris 
        "imgNaruto": "./view/img/battle-tetris.png",
        "titleNarutoTetris" : "Naruto Tetris",
        "descNarutoTetris" : "Feito por Lara e Silvia",
    }

    function soundSelect(){
        selectSound.currentTime=0
        selectSound.play()
    }

    function botaoSair(){
        imgPrincipal.removeAttribute('src')
            titleJogos.innerHTML=``
            descJogos.innerHTML=``
    }

    battleTetris.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgBattleTetris)
        titleJogos.innerHTML=`${informacoes.titleBattleTetris}`
        descJogos.innerHTML=`${informacoes.descBattleTetris}`

        soundSelect()
    })

    onePiece.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgOnePiece)
        soundSelect()
    })

    bobEsponja.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgBobEsponja)
        soundSelect()

    })

    windowsXP.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgWindowsXP)
        soundSelect()

    })

    retro.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgRetro)
        soundSelect()

    })

    mario.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgMario)
        soundSelect()

    })

    barbie.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgBarbie)
        soundSelect()

    })

    mcqueen.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgMcQueen)
        soundSelect()
        
    })
    
    naruto.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgNaruto)
        soundSelect()
        
    })
    buttons.forEach((button) => {
        button.addEventListener('mouseleave', botaoSair);
    });
})

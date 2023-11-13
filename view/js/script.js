document.addEventListener('DOMContentLoaded', function () {
    let imgPrincipal = document.querySelector('.imgPrincipal')
    let titleJogos = document.querySelector('.title-jogos')
    let descJogos = document.querySelector('.desc-jogos')
    const selectSound = document.querySelector('#select-sound')

    // Buttons
    const battleTetris = document.querySelectorAll('.battle-tetris')
    const onePiece = document.querySelectorAll('.one-piece')
    const bobEsponja = document.querySelectorAll('.bob-esponja')
    const windowsXP = document.querySelectorAll('.windows-xp')
    const retro = document.querySelectorAll('.retro')
    const mario = document.querySelectorAll('.mario')
    const naruto = document.querySelectorAll('.naruto')
    const mcqueen = document.querySelectorAll('.mcqueen')
    const barbie = document.querySelectorAll('.barbie')

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
        console.log('Tentando reproduzir som');
    }

    function botaoSair(){
        imgPrincipal.removeAttribute('src')
            titleJogos.innerHTML=``
            descJogos.innerHTML=``
    }

    battleTetris.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgBattleTetris)
            titleJogos.innerHTML=`${informacoes.titleBattleTetris}`
            descJogos.innerHTML=`${informacoes.descBattleTetris}`
            soundSelect()
            
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
    onePiece.forEach(element=>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgOnePiece)
            soundSelect()
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
    bobEsponja.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgBobEsponja)
            soundSelect()
    
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    

    windowsXP.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgWindowsXP)
            soundSelect()
    
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
    retro.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgRetro)
            soundSelect()
    
        }) 
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
    mario.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgMario)
            soundSelect()
    
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
    barbie.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgBarbie)
            soundSelect()
    
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
    mcqueen.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgMcQueen)
            soundSelect()
            
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })

    naruto.forEach(element =>{
        element.addEventListener('mouseenter', ()=>{
            imgPrincipal.setAttribute('src', informacoes.imgNaruto)
            soundSelect()
            
        })
        element.addEventListener('mouseleave',()=>{
            botaoSair()
        })
    })
    
})

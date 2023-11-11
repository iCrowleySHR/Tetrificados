document.addEventListener('DOMContentLoaded', function () {
    let imgPrincipal = document.querySelector('.imgPrincipal')
    let titleJogos = document.querySelector('.title-jogos')
    let descJogos = document.querySelector('.desc-jogos')

    // Buttons
    let battleTetris = document.querySelector('.battle-tetris')
    let onePiece = document.querySelector('.one-piece')
    let bobEsponja = document.querySelector('.bob-esponja')
    let windowsXP = document.querySelector('.windows-xp')
    let retro = document.querySelector('.retro')
    let mario = document.querySelector('.mario')
    let barbie = document.querySelector('.barbie')

    const scrollContainer = document.querySelector(".scroll");

    // Função para clonar e adicionar elementos infinitamente
    function addElementsInfinitely() {
      const buttons = scrollContainer.querySelectorAll("button");
      buttons.forEach((button) => {
        const clone = button.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    }

       // Adicione um evento de rolagem para chamar a função quando necessário
       scrollContainer.addEventListener("scroll", function () {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          addElementsInfinitely();
        }
      });
  
      // Chame a função inicialmente para preencher a tela
      addElementsInfinitely();


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
        "imgOnePiece": "./view/img/battle-tetris.png",
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

    battleTetris.addEventListener('mouseenter', ()=>{
        imgPrincipal.setAttribute('src', informacoes.imgBattleTetris)
        titleJogos.innerHTML=`${informacoes.titleBattleTetris}`
        descJogos.innerHTML=`${informacoes.descBattleTetris}`

        battleTetris.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
            titleJogos.innerHTML=``
            descJogos.innerHTML=``
        })

    })
    onePiece.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgOnePieceTetris
        imgPrincipal.setAttribute('src', img)
        onePiece.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    })
    bobEsponja.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgBobEsponjaTetris
        imgPrincipal.setAttribute('src', img)
        bobEsponja.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    })  
    windowsXP.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgWindowsXPTetris
        imgPrincipal.setAttribute('src', img)
        windowsXP.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    })    
    troll.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgTrollTetris
        imgPrincipal.setAttribute('src', img)
        troll.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    })    
    retro.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgRetroTetris
        imgPrincipal.setAttribute('src', img)
        retro.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    }) 
    mario.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgMarioTetris
        imgPrincipal.setAttribute('src', img)
        mario.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    }) 
    barbie.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgBarbieTetris
        imgPrincipal.setAttribute('src', img)
        barbie.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    }) 
    mcqueen.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgMcQueenTetris
        imgPrincipal.setAttribute('src', img)
        mcqueen.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })
    }) 
})

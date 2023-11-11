document.addEventListener('DOMContentLoaded', function () {
    let imgPrincipal = document.querySelector('.imgPrincipal')
    let battleTetris = document.querySelector('.battle-tetris')
    let titleJogos = document.querySelector('.title-jogos')
    let descJogos = document.querySelector('.desc-jogos')

    let informacoes = {
        /*Battle Tetris*/
        "imgBattleTetris": "./view/img/battle-tetris.png",
        "titleBattleTetris" : "Battle Tetris",
        "descBattleTetris" : "Feito por Gustavo Gualda, João Paulo e João Luiz"

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
})

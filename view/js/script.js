document.addEventListener('DOMContentLoaded', function () {
    let imgPrincipal = document.querySelector('.imgPrincipal')
    let battleTetris = document.querySelector('.battle-tetris')
    
    let informacoes = {
        "imgBattleTetris": "./view/img/battle-tetris.png" 
    }

    battleTetris.addEventListener('mouseenter', ()=>{
        let img = informacoes.imgBattleTetris
        imgPrincipal.setAttribute('src', img)

        battleTetris.addEventListener('mouseleave', ()=>{
            imgPrincipal.removeAttribute('src')
        })

    })
})

document.addEventListener('DOMContentLoaded', function () {

    // Itens dos projetos
    let imgPrincipal = document.querySelector('.imgPrincipal');
    let titleJogos = document.querySelector('.title-jogos');
    let descJogos = document.querySelector('.desc-jogos');
    const selectSound = document.querySelector('#select-sound');
    let main = document.querySelector('main');
    let btnJogar = document.querySelector('.btn-jogar');

    // Button
    const buttons = document.querySelectorAll('.btn-open');
    
    // Objeto contendo todos os projetos
    const projetos = {

        // Battle Tetris
        'btn-1': {
            img: "view/img/battle-tetris.png",
            title: "Battle Tetris",
            description: "<strong>Feito por:</strong> Gustavo Gualda, João Paulo e João Luiz"
        },
        
        // One piece tetris
        'btn-2': {
            img: "view/img/battle-tetris.png",
            title: "One Piece Tetris",
            description: "<strong>Feito por:</strong> Nicole, Maria Clara e Raissa"
        },

        // Bob Esponja Tetris
        'btn-3': {
            img: "view/img/tetris-bobesponja.png",
            title: "Bob Esponja Tetris",
            description: "<strong>Feito por:</strong> Ana Gabrielly, Maria Luisa, Leandro, Luiza e Fabiola"
        },

        // Windows XP Tetris 
        'btn-4': {
            img: "view/img/battle-tetris.png",
            title: "Windows XP Tetris",
            description: "<strong>Feito por:</strong> Miguel, Matheus e Pedro"
        },
        
        // Food Tetris
        'btn-5': {
            img: "view/img/food-tetris.png",
            title: "Food Tetris",
            description: "<strong>Feito por:</strong> Gustavo Sachetto, Gustavo Lima, Kaue e Erick"
        },

        // Mario Tetris
        'btn-6': {
            img: "view/img/battle-tetris.png",
            title: "Mario Tetris",
            description: "<strong>Feito por:</strong> Myrela, Nicoli, Leonardo e Patrick"
        },

        // Barbie Tetris
        'btn-7': {
            img: "view/img/battle-tetris.png",
            title: "Barbie Tetris",
            description: "<strong>Feito por:</strong> Gisele, Brenda, Kauany e Kírya"
        },
        
        // McQueen Tetris 
        'btn-8': {
            img: "view/img/battle-tetris.png",
            title: "McQueen Tetris",
            description: "<strong>Feito por:</strong> Júlio, Sales, Jhonatas e Ana Júlia"
        },
        
        // Naruto Tetris 
        'btn-9': {
            img: "view/img/tetris-naruto.png",
            title: "Naruto Tetris",
            description: "<strong>Feito por:</strong> Lara e Silvia"
        },
    }

    btnJogar.addEventListener('click',()=>{
        console.log('oi')
        let primeiraPagina = document.querySelector('.primeiraPagina')
        primeiraPagina.style.display='none'
        main.style.display='flex'
    })


    function soundSelect(){
        selectSound.currentTime=0
        selectSound.play()
        console.log('Tentando reproduzir som');
    }

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            imgPrincipal.src = projetos[button.id]['img'];
            titleJogos.innerHTML = projetos[button.id]['title'];
            descJogos.innerHTML = projetos[button.id]['description'];
            soundSelect();
        });
    });
});
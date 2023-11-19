document.addEventListener('DOMContentLoaded', function () {

    // Itens dos projetos
    let imgPrincipal = document.querySelector('.imgPrincipal');
    let titleJogos = document.querySelector('.title-jogos');
    let descJogos = document.querySelector('.desc-jogos');
    const MarioSound = document.querySelector('#mario-sound');
    const BarbieSound = document.querySelector('#barbie-sound');
    const OnePieceSound = document.querySelector('#one-piece-sound');
    const WindowsXpSound = document.querySelector('#windows-xp-sound');
    const McQueenSound = document.querySelector('#mcqueen-sound');
    const NarutoSound = document.querySelector('#naruto-sound');
    const BobSound = document.querySelector('#bob-sound');
    const TrollSound = document.querySelector('#troll-sound');
    const BattleSound = document.querySelector('#battle-sound');
    const FoodSound = document.querySelector('#food-sound');
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
            description: "<strong>Feito por:</strong> Gustavo Gualda, João Paulo e João Luiz<br>"+
            "Batalhe com um amigo, podendo escolher diversas músicas para acompanhar sua batalha "+
            "e diversos fundos também!"
        },

         // Bob Esponja Tetris
         'btn-2': {
            img: "view/img/tetris-bobesponja.png",
            title: "Bob Esponja Tetris",
            description: "<strong>Feito por:</strong> Ana Gabrielly, Maria Luisa, Leandro, Luiza e Fabiola<br>"+
            "Venha jogar na fenda do bikini, com três modos diferentes repletos de designs incríveis e pura diversão!"
        },

        // Mario Tetris
        'btn-3': {
            img: "view/img/tetris-mario.png",
            title: "Mario Tetris",
            description: "<strong>Feito por:</strong> Myrela, Nicoli, Leonardo e Patrick<br>"+
            "Venha se aventurar com os três modos de dificuldade no mundo do Mario! Luigi, Mario e Bowser!<br>"+
            "Dúvido você ganhar o modo Bowser!"
        },
        
        // One piece tetris
        'btn-4': {
            img: "view/img/battle-tetris.png",
            title: "One Piece Tetris",
            description: "<strong>Feito por:</strong> Nicole, Maria Clara e Raissa<br>"+
            "Venha embarcar em uma jornada com diversos desafios, e conquiste cada um deles!"
        },

        // Barbie Tetris
        'btn-5': {
            img: "view/img/battle-tetris.png",
            title: "Barbie Tetris",
            description: "<strong>Feito por:</strong> Gisele, Brenda, Kauany e Kírya<br>"+
            "Venha conhecer a BarbieLândia com o Tetris da Barbie! <br>Fique ligado e presta atenção, "+
            "meu Tetris é diferente sou muito exigente!"
        },

        // Food Tetris
        'btn-6': {
            img: "view/img/food-tetris.png",
            title: "Food Tetris",
            description: "<strong>Feito por:</strong> Gustavo Sachetto, Gustavo Lima, Kaue e Erick<br>"+
            "Está com fome? Venha saborear esse Tetris, e se deliciar com a diversão!"
        },

        // Windows XP Tetris 
        'btn-7': {
            img: "view/img/tetris-windowsxp.png",
            title: "Windows XP Tetris",
            description: "<strong>Feito por:</strong> Miguel, Matheus e Pedro<br>"+
            "Você tem sede de nostálgia? Aqui é o lugar certo! Jogue o Tetris do Windows XP agora mesmo!S2"
        },
        
        
        // McQueen Tetris 
        'btn-8': {
            img: "view/img/battle-tetris.png",
            title: "McQueen Tetris",
            description: "<strong>Feito por:</strong> Júlio, Sales, Jhonatas e Ana Júlia<br>"+
            "Venha correr e se divertir na Copa Pistão! Katchau!"
        },
        
        // Naruto Tetris 
        'btn-9': {
            img: "view/img/tetris-naruto.png",
            title: "Naruto Tetris",
            description: "<strong>Feito por:</strong> Lara e Silvia<br>"+
            "Recarregue seu Chakra e venha jogar esse Tetris nível ninja! Dúvido você sobreviver ao Sharingan!"
        },

         // Tetris Troll
         'btn-10': {
            img: "view/img/tetris-troll.png",
            title: "Tetris Troll",
            description: "<strong>Feito por:</strong> Lucas, Richard e Ryan<br>"+
            "Será você capaz de sobreviver ao Tetris mais fácil? PS: Cuidado com as peças malucas"
        },
    }



    btnJogar.addEventListener('click',()=>{
        console.log('oi')
        let primeiraPagina = document.querySelector('.primeiraPagina')
        primeiraPagina.style.display='none'
        main.style.display='flex'
    })

    function marioSound() {
        MarioSound.currentTime = 0;
        MarioSound.play();
        console.log('Tentando reproduzir som do Mario');
    }

    function barbieSound() {
        BarbieSound.currentTime = 0;
        BarbieSound.play();
        console.log('Tentando reproduzir som do Mario');
    }

    function bobSound() {
        BobSound.currentTime = 0;
        BobSound.play();
        console.log('Tentando reproduzir som do Mario');
    }

    function onepieceSound() {
        OnePieceSound.currentTime = 0;
        OnePieceSound.play();
        console.log('Tentando reproduzir som de One Piece');
    }

    function windowsxpSound() {
        WindowsXpSound.currentTime = 0;
        WindowsXpSound.play();
        console.log('Tentando reproduzir som do Windows XP');
    }

    function mcqueenSound() {
        McQueenSound.currentTime = 0;
        McQueenSound.play();
        console.log('Tentando reproduzir som do Naruto');
    }

    function narutoSound() {
        NarutoSound.currentTime = 0;
        NarutoSound.play();
        console.log('Tentando reproduzir som do Naruto');
    }

    function battleSound() {
        BattleSound.currentTime = 0;
        BattleSound.play();
        console.log('Tentando reproduzir som da batalha');
    }

    function trollSound() {
        TrollSound.currentTime = 0;
        TrollSound.play();
        console.log('Tentando reproduzir som da trolagem');
    }

    function foodSound() {
        FoodSound.currentTime = 0;
        FoodSound.play();
        console.log('Tentando reproduzir som da comida');
    }

    function stopAudio() {
        MarioSound.pause();
        BarbieSound.pause();
        BobSound.pause();
        OnePieceSound.pause();
        WindowsXpSound.pause();
        NarutoSound.pause();
        McQueenSound.pause();
        BattleSound.pause();
        TrollSound.pause();
        FoodSound.pause();
    }

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            imgPrincipal.src = projetos[button.id]['img'];
            titleJogos.innerHTML = projetos[button.id]['title'];
            descJogos.innerHTML = projetos[button.id]['description'];

            if (button.id === 'btn-1') {
                
                battleSound();
            } else if (button.id === 'btn-2') {
                bobSound();
            }else if (button.id === 'btn-3') {
                marioSound();
            }else if (button.id === 'btn-4') {
                onepieceSound();
            }else if (button.id === 'btn-5') {
                barbieSound();
            }else if (button.id === 'btn-6') {
                foodSound();
            }else if (button.id === 'btn-7') {
                windowsxpSound();
            }else if (button.id === 'btn-8') {
                mcqueenSound();
            }else if (button.id === 'btn-9') {
               narutoSound();
            }else if (button.id === 'btn-10') {
                trollSound();
            }
        });

        button.addEventListener('mouseleave', () => {
            stopAudio();
        });
    });



  
});
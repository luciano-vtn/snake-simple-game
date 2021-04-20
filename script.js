
// Inicio do GameSnake -> Elemantos de inicialização do "Game".
    let canvas = document.getElementById("gameSnake");
    let context = canvas.getContext("2d"); //"Context" -> Renderiza o jogo em "2D".
    let box = 32;

// Criando Arrey de elementos de movientação da "Snake" (trabalhando com coordenadas)
    let snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }
    let direction = "right";

// ** Função para criar os limtes do jogo. {"context.fillRect"} -> (Usa 4 parametros -> Altura , Largura e posições de "X" "Y")
    function criarBG() {
    context.fillStyle = "#F0F8FF";
    context.fillRect(0, 0, 16 * box, 16 * box); // **
    }
    
// Cria Snake na tela    
    function criarSnake() {
        for (i = 0; i < snake.length; i++) {
            context.fillStyle = "blue";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }

// Cria "evento" -> (EventListener) usando o parametro 'Keydow' para pegar os cliques das setas do teclado -> ◄ , ▲ , ► , ▼
    document.addEventListener('keydown', update);
    function update(event) {
        if (event.keyCode == 37 && direction != 'right') direction = 'left';
        if (event.keyCode == 38 && direction != 'down')  direction = 'up';
        if (event.keyCode == 39 && direction != 'left')  direction = 'right';
        if (event.keyCode == 40 && direction != 'up')    direction = 'down';
    }

// Setando a "food -> comida da snake" 
//Aqui foi crado a "food" do jogo.
    function drawFood() { 
        context.fillStyle = "black";
        context.fillRect(food.x, food.y, box, box);
    }
    let food = {    
        x: Math.floor(Math.random() * 6 + 1) * box, // METODO para que a "food" sempre apareça dentro do limite do GAME.
        y: Math.floor(Math.random() * 6 + 1) * box
    }

// "START -> GAME"
    function iniciarJogo() {

    // Condições para que a "Snake" fique dentro da tela do jogo   
        if (snake[0].x > 14 * box && direction == "right") snake[0].x = 0;
        if (snake[0].x < 0 && direction == 'left') snake[0].x = 14 * box;
        if (snake[0].y > 14 * box && direction == "down") snake[0].y = 0;
        if (snake[0].y < 0 && direction == 'up') snake[0].y = 14 * box;

    //Condição de "fim de jogo -> GAME OVER" (QUNDO A SNAKE TOCAR NO PROPRIO CORPO)
        for (i = 1; i < snake.length; i++) {
            if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                clearInterval(game);
                alert("GAME HOVER - TECLA 'F5' PARA INICIAR");
            }
        }

    // Chamada de Funções.   
        criarBG();
        criarSnake();
        drawFood();

     //Direcionamento da "snake" dentro do jogo
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction == "right") snakeX += box;
        if (direction == "left") snakeX -= box;
        if (direction == "up") snakeY -= box;
        if (direction == "down") snakeY += box;

     //"snake.pop" e responsavel pela subtração do utimo elemento da snake (simula movimento para frente).
     // condição de movimento da "food" dentro do game
        if (snakeX != food.x || snakeY != food.y) {
            snake.pop(); 
        } else {
            food.x = Math.floor(Math.random() * 14 + 1) * box;
            food.y = Math.floor(Math.random() * 14 + 1) * box;
        }

        let newHead = {
            x: snakeX,
            y: snakeY
        }
    //método unshift adiciona o primeiro quadradinho da cobrinha
        snake.unshift(newHead); 
    }
        let game = setInterval(iniciarJogo, 100);

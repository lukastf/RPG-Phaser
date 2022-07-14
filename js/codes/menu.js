Menu = function(game) {};

Menu = {

    makeButton: function(name, x, y, click){

        this.button = this.add.button(x, y, 'botao', click, this, 2, 1, 0);
        this.button.name = name;
        this.button.smoothed = false;
        this.text = this.add.text(x + 30, y + 13, name, { font: "30px Arial", fill: "#000000" });

    },

    play: function(){
        this.state.start('Game');
    },

    instruc: function(){
        this.state.start('Instruc');
    },

    preload: function(){

        this.load.image('background', 'assets/background.png');
        this.load.spritesheet('botao', 'assets/botao.png', 222, 72);
        this.load.spritesheet('miniBotao', 'assets/minibotao.png', 53, 41);
    },

    create: function(){
        this.add.image(0,0, 'background');

        this.makeButton('Play', 300, 300, this.play);
        this.makeButton('How to Play', 300, 350, this.instruc);
    },

    update: function(){

    }

};
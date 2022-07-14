ArmorStore = function(game){

};

ArmorStore = {
    preload: function(){

        preloadLoja(this);

        this.load.spritesheet('Alex', 'assets/AlexSpr.png', 32, 32);

        preloadInterfaceGrafica(this);

        this.load.image('scoob', 'assets/npcs/scoob.png', 32, 32);
        
        preloadItens(this);
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);

        map = game.add.tilemap('map');

        layer[0] = map.createLayer('Piso');
        layer[1] = map.createLayer('Ambiente');
        layer[2] = map.createLayer('Janela');
        layer[0].resizeWorld();
        layer[1].resizeWorld();
        layer[2].resizeWorld();

        map.addTilesetImage('pisos', 'pisos');
        map.addTilesetImage('parede', 'parede');
        map.addTilesetImage('balcao', 'balcao');
        map.addTilesetImage('janela', 'janela');
        map.addTilesetImage('porta', 'porta');


        map.setCollisionBetween(1, 9, true, layer[1]);
        map.setCollision(21,true,layer[1]);

        cursors = game.input.keyboard.createCursorKeys();

        cachefala = game.cache.getJSON('falas');

        spriteAlex = game.add.sprite(alexposX, alexposY, 'Alex');
        game.physics.enable([spriteAlex], Phaser.Physics.ARCADE);

        npcs = this.add.physicsGroup();
        npc10 = npcs.create(190, 30, 'scoob');
        npc10.body.immovable = true;
        npc10.nome = "Scoob";
        npc10.id = 10;

        //animações de andar
        spriteAlex.animations.add('andarBaixo',[0,1,2]);
        spriteAlex.animations.add('andarDireita',[3,4,5]);
        spriteAlex.animations.add('andarEsquerda',[6,7,8]);
        spriteAlex.animations.add('andarCima',[9,10,11]);

        vidaAlex(vida);
        interfaceGrafica();

        //game.camera.fade(0x1781a8, 40000);
    },
    update: function(){
        game.physics.arcade.collide(spriteAlex, layer);
        game.physics.arcade.collide(spriteAlex, npcs);

        falar(npc10);

        if(stateLoja == false){
            moveAlex(spriteAlex);
        }

        if(110 >= spriteAlex.body.x - 20 && 110 <= spriteAlex.body.x + 20 && 200 >= spriteAlex.body.y && 200 <= spriteAlex.body.y + 10){
            alexposX = 2365;
            alexposY = 1101;
            
            this.state.start('Game');
        }

        //game.debug.spriteInfo(spriteAlex, 32, 32);
    }
}
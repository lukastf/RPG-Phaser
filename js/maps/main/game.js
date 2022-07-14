Game = function(game){
};

var cursors;
var spriteAlex;
var map;
var layer = [];
var cachefala;
var stateLoja = false;
var stateJanela = false;

var spriteVida = [];
var textoGold = 0;
var ctroleVida = true;
var ctroleFala = true;
//var ctroleFalarapida = true;
var pau = true;
var stateJanela = false;

var botaoEquip;
var botaoRings;
var botaoConfigs;

var campoTexto;
var textoNome;
var textoFala;

var line = [];
var wordIndex = 0;
var lineIndex = 0;
var wordDelay = 150;
var lineDelay = 400;

button = [];
//minibutton = [];
indiceBotao = 0;

Game = {

    preload: function(){
        //mapa
        this.load.tilemap('map', 'js/maps/main/mapa.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.json('falas', 'js/codes/falas.json');

        this.load.image('pisos', 'assets/pisos.png');
        this.load.image('objetos', 'assets/objetos.png');
        this.load.image('vulcao', 'assets/vulcao.png');
        this.load.image('muralha', 'assets/muralha.png');
        this.load.image('casa', 'assets/casa.png');
        this.load.image('castelo', 'assets/castelo.png');
        this.load.image('placas', 'assets/placas.png');
        this.load.image('trigo', 'assets/trigo.png');
        //sprites
        this.load.spritesheet('Alex', 'assets/AlexSpr.png', 32, 32);
        this.load.spritesheet('SlimeVerde', 'assets/monsters/slime.png', 32, 32);
        this.load.spritesheet('smith', 'assets/npcs/smith.png', 32, 32);
        
        //imagens
        preloadInterfaceGrafica(this);

        preloadItens(this);

        this.load.image('bob', 'assets/npcs/bob.png', 32, 32);
        this.load.image('alicia', 'assets/npcs/alicia.png', 32, 32);
        this.load.image('junior', 'assets/npcs/junior.png', 32, 32);
        this.load.image('fred', 'assets/npcs/fred.png', 32, 32);
        this.load.image('roberta', 'assets/npcs/roberta.png', 32, 32);
        this.load.image('rob', 'assets/npcs/rob.png', 32, 32);
    },

    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);

        map = game.add.tilemap('map');

        layer[0] = map.createLayer('Piso');
        layer[1] = map.createLayer('Ambiente');
        layer[0].resizeWorld();
        layer[1].resizeWorld();

        map.addTilesetImage('pisos', 'pisos');
        map.addTilesetImage('objetos', 'objetos');
        map.addTilesetImage('vulcao', 'vulcao');
        map.addTilesetImage('muralha', 'muralha');
        map.addTilesetImage('casa', 'casa');
        map.addTilesetImage('castelo', 'castelo');
        map.addTilesetImage('placas', 'placas');
        map.addTilesetImage('trigo', 'trigo');
        
        map.setCollision(3,true,layer[0]);
        map.setCollisionBetween(7, 8, true, layer[0]);
        map.setCollisionBetween(9, 13, true, layer[1]);
        map.setCollisionBetween(14, 24, true, layer[1]);
        map.setCollisionBetween(25, 33, true, layer[1]);
        map.setCollisionBetween(34, 38, true, layer[1]);
        map.setCollisionBetween(39, 58, true, layer[1]);
        map.setCollisionBetween(64, 67, true, layer[1]);
        map.setCollisionBetween(68, 79, true, layer[1]);



        cursors = game.input.keyboard.createCursorKeys();
        //game.input.onDown.add(resize, this);

        spriteAlex = game.add.sprite(alexposX, alexposY, 'Alex');
        //npc = this.add.sprite(1100, 1270, 'npc');
        //vidaAlex(vida);
        slimeVida = 5;
        game.physics.enable([spriteAlex], Phaser.Physics.ARCADE);
        slimes = this.add.physicsGroup();
        slime1 = slimes.create(1400, 170, 'SlimeVerde');
        slime1.vida = slimeVida;
        slime2 = slimes.create(1400, 450, 'SlimeVerde');
        slime2.vida = slimeVida;
        slime3 = slimes.create(1200, 800, 'SlimeVerde');
        slime3.vida = slimeVida;
        slime4 = slimes.create(226, 700, 'SlimeVerde');
        slime4.vida = slimeVida;
        slime5 = slimes.create(320, 900, 'SlimeVerde');
        slime5.vida = slimeVida;
        slime6 = slimes.create(610, 850, 'SlimeVerde');
        slime6.vida = slimeVida;
        slime7 = slimes.create(800, 913, 'SlimeVerde');
        slime7.vida = slimeVida;
        slime8 = slimes.create(920, 765, 'SlimeVerde');
        slime8.vida = slimeVida;
        slime9 = slimes.create(1440, 690, 'SlimeVerde');
        slime9.vida = slimeVida;
        slime10 = slimes.create(1760, 570, 'SlimeVerde');
        slime10.vida = slimeVida;
        slime11 = slimes.create(1850, 850, 'SlimeVerde');
        slime11.vida = slimeVida;
        slime12 = slimes.create(2080, 880, 'SlimeVerde');
        slime12.vida = slimeVida;
        slime13 = slimes.create(2050, 500, 'SlimeVerde');
        slime13.vida = slimeVida;
        slime14 = slimes.create(2020, 210, 'SlimeVerde');
        slime14.vida = slimeVida;
        slime15 = slimes.create(2650, 360, 'SlimeVerde');
        slime15.vida = slimeVida;
        slime16 = slimes.create(768, 160, 'SlimeVerde');
        slime16.vida = slimeVida;
        slime17 = slimes.create(1026, 552, 'SlimeVerde');
        slime17.vida = slimeVida;
        slime18 = slimes.create(1723, 152, 'SlimeVerde');
        slime18.vida = slimeVida;
        slime19 = slimes.create(2400, 725, 'SlimeVerde');
        slime19.vida = slimeVida;
        slime20 = slimes.create(2655, 725, 'SlimeVerde');
        slime20.vida = slimeVida;
        slime21 = slimes.create(2655, 725, 'SlimeVerde');
        slime21.vida = slimeVida;
        slime22 = slimes.create(2800, 1200, 'SlimeVerde');
        slime22.vida = slimeVida;
        slime23 = slimes.create(3030, 1000, 'SlimeVerde');
        slime23.vida = slimeVida;

        slimes.dano = 1;

        // npcs
        cachefala = game.cache.getJSON('falas');
        
        npcs = this.add.physicsGroup();
        npc1 = npcs.create(1080, 1270, 'bob');
        npc1.body.immovable = true;
        npc1.nome = "Bob";
        npc1.id = 1;

        npc2 = npcs.create(1000, 1130, 'alicia');
        npc2.body.immovable = true;
        npc2.nome = "Alicia";
        npc2.id = 2;

        npc3 = npcs.create(1032, 1130, 'junior');
        npc3.body.immovable = true;
        npc3.nome = "Junior";
        npc3.id = 3;

        npc4 = npcs.create(2160, 1376, 'fred');
        npc4.body.immovable = true;
        npc4.nome = "Fred";
        npc4.id = 4;

        npc5 = npcs.create(1235, 1815, 'roberta');
        npc5.body.immovable = true;
        npc5.nome = "Roberta";
        npc5.id = 5;

        npc6 = npcs.create(2276, 1720, 'rob');
        npc6.body.immovable = true;
        npc6.nome = "Rob";
        npc6.id = 6;

        npc7 = npcs.create(1388, 1910, 'smith');
        npc7.body.immovable = true;
        npc7.nome = "Smith";
        npc7.id = 7;
        npc7.animations.add('bigorna',[0,1,2]);
        

        //animações de andar
        spriteAlex.animations.add('andarBaixo',[0,1,2]);
        spriteAlex.animations.add('andarDireita',[3,4,5]);
        spriteAlex.animations.add('andarEsquerda',[6,7,8]);
        spriteAlex.animations.add('andarCima',[9,10,11]);

        //animações de ataque
        spriteAlex.animations.add('atkBaixo', [12,13,14]);
        spriteAlex.animations.add('atkDireita', [15,16,17]);
        spriteAlex.animations.add('atkEsquerda', [18,19,20]);
        spriteAlex.animations.add('atkCima',[21,22,23]);

        vidaAlex(vida);
        interfaceGrafica();
        //campoTexto = game.add.sprite(0, 0, 'campoTexto');
        //campoTexto.fixedToCamera = true;
        //campoTexto.cameraOffset.setTo(0, 400);

        //game.time.events.add(Phaser.Timer.SECOND * 1, alavanca, this);

        //cachefala = this.cache.getJSON('falas');
        
        //falarNpc();
       // for(i = 0; i < cachefala.cidade.length; i++){
       //    nome[i] = cachefala.cidade[i].nome;
        //   texto[i] = cachefala.cidade[i].fala;
        //}
        

    },

    update: function(){

        game.physics.arcade.collide(spriteAlex, layer);
        game.physics.arcade.collide(slimes, layer);
        game.physics.arcade.collide(spriteAlex, npcs);
        game.physics.arcade.collide(npcs, layer);
        game.physics.arcade.collide(spriteAlex, slimes, atkMonster);
        game.physics.arcade.collide(slimes, slimes);

        
        ///if(boolContato == false){
            //game.physics.arcade.collide(spriteAlex, layer[2], danoContato);
        //}
        
        //if(slimes.vida <= 0){
            //slimes.remove()
        //}

        npc7.animations.play('bigorna', 5);

        moveAlex(spriteAlex);

        atkAlex();

        useItens();

        //vidaAlex(vida);

        moveMonsterPacote();

        monsterDeathPacote();

        falarNpcPacote();

        //loja de armas
        if(930 >= spriteAlex.body.x - 20 && 930 <= spriteAlex.body.x + 20 && 1850 <= spriteAlex.body.y && 1850 >= spriteAlex.body.y - 10){
            alexposX = 111;
            alexposY = 181;
            this.state.start('WeaponStore');
            console.log("oi armas");
        }

        //loja de armaduras
        if(2365 >= spriteAlex.body.x - 20 && 2365 <= spriteAlex.body.x + 20 && 1083 <= spriteAlex.body.y && 1083 >= spriteAlex.body.y - 10){
            alexposX = 111;
            alexposY = 181;
            this.state.start('ArmorStore');
            console.log("oi armaduras");
        }

        //loja de poções
        if(1953 >= spriteAlex.body.x - 20 && 1953 <= spriteAlex.body.x + 20 && 1850 <= spriteAlex.body.y && 1850 >= spriteAlex.body.y - 10){
            alexposX = 111;
            alexposY = 181;
            this.state.start('PotionStore');
            console.log("oi potion");
        }

        //water-ring
        if(384 >= spriteAlex.body.x - 20 && 384 <= spriteAlex.body.x + 20 && 160 <= spriteAlex.body.y && 160 >= spriteAlex.body.y - 10){
            alexposX = 786;
            alexposY = 1534;
            this.state.start('WaterRingF1');
            console.log("oi water ring");
        }

        game.debug.spriteInfo(spriteAlex, 32, 32);

       
    }
}
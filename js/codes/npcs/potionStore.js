function comprarLupus() {
    campoTexto.destroy();
    textoNome.destroy();
    textoFala.destroy();
    ctroleFala = true;
    pau = true;
    button[0].destroy();
    button[1].destroy();
    indiceBotao = 0;
    stateLoja = true;

    campoLoja = game.add.image(0, 0, 'campoLoja');
    campoLoja.fixedToCamera = true;
    campoLoja.cameraOffset.setTo(0, 50);

    textoNome = game.add.text(0, 0, cachefala.cidade[9].nome + "'s shop", { font: "15px Arial", fill: "#e7dfea" , fontSize: "30px", fontWeight: "bold"} );
    textoNome.fixedToCamera = true;
    textoNome.cameraOffset.setTo(10, 60);

    miniBotao("X",735, 110, fecharLojaLupus);
    
    // herb
    imgherb = game.add.image(0,0, 'herb');
    imgherb.fixedToCamera = true;
    imgherb.cameraOffset.setTo(10, 150);
    imgherb.scale.setTo(2.0,2.0);

    txtherb = game.add.text(0,0, "Herb                                       10g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtherb.fixedToCamera = true;
    txtherb.cameraOffset.setTo(100, 170);

    botao("Buy",500, 150, comprarHerb);

    function comprarHerb() {
        if(gold >= 10){
            gold = gold - 10;
            textoGold.text = gold;
            herb++;
        }
    }

    // water bottle
    imgWaterBottle = game.add.image(0,0, 'waterBottle');
    imgWaterBottle.fixedToCamera = true;
    imgWaterBottle.cameraOffset.setTo(10, 250);
    imgWaterBottle.scale.setTo(2.0,2.0);

    txtWaterBottle = game.add.text(0,0, "Water Bottle                          10g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtWaterBottle.fixedToCamera = true;
    txtWaterBottle.cameraOffset.setTo(100, 270);

    botao("Buy",500, 250, comprarWaterBottle);

    function comprarWaterBottle(){
        if(gold >= 10){
            gold = gold - 10;
            textoGold.text = gold;
            waterBottle++;
        }
    }

    // life orb
    imgLifeOrb = game.add.image(0,0, 'lifeOrb');
    imgLifeOrb.fixedToCamera = true;
    imgLifeOrb.cameraOffset.setTo(10, 350);
    imgLifeOrb.scale.setTo(2.0,2.0);

    txtLifeOrb = game.add.text(0,0, "Life Orb                                 100g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtLifeOrb.fixedToCamera = true;
    txtLifeOrb.cameraOffset.setTo(100, 370);

    botao("Buy",500, 350, comprarLifeOrb);

    function comprarLifeOrb(){
        if(gold >= 100){
            gold = gold - 100;
            textoGold.text = gold;
            lifeOrb++;
        }
    }

    // mana orb
    imgManaOrb = game.add.image(0,0, 'manaOrb');
    imgManaOrb.fixedToCamera = true;
    imgManaOrb.cameraOffset.setTo(10, 450);
    imgManaOrb.scale.setTo(2.0,2.0);

    txtManaOrb = game.add.text(0,0, "Mana Orb                              100g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtManaOrb.fixedToCamera = true;
    txtManaOrb.cameraOffset.setTo(100, 470);

    botao("Buy",500, 450, comprarManaOrb);

    function comprarManaOrb() {
        if(gold >= 100){
            gold = gold - 100;
            textoGold.text = gold;
            manaOrb++;
        }
    }

    // pickaxe
    // imgPickAxe = game.add.image(0,0, 'pickaxe');
    // imgPickAxe.fixedToCamera = true;
    // imgPickAxe.cameraOffset.setTo(10, 450);
    // imgPickAxe.scale.setTo(2.0,2.0);

    // txtPickAxe = game.add.text(0,0, "Pickaxe                         100g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    // txtPickAxe.fixedToCamera = true;
    // txtPickAxe.cameraOffset.setTo(100, 470);

    // botao("Buy",500, 450, compraPickAxe);

    // function compraPickAxe() {
    //     if(gold >= 500 && pickaxe == false){
    //         gold = gold - 500;
    //         textoGold.text = gold;
    //         pickaxe = true;
    //     }
    // }
}

function sairLupus(){
    campoTexto.destroy();
    textoNome.destroy();
    textoFala.destroy();
    ctroleFala = true;
    pau = true;
    button[0].destroy();
    button[1].destroy();
    indiceBotao = 0;
}

function fecharLojaLupus() {
    campoLoja.destroy();
    textoNome.destroy();
    for(i = 0; i < button.length; i++){
        button[i].destroy();
    }
    imgherb.destroy();
    txtherb.destroy();
    imgWaterBottle.destroy();
    txtWaterBottle.destroy();
    imgLifeOrb.destroy();
    txtLifeOrb.destroy();
    imgManaOrb.destroy();
    txtManaOrb.destroy();
    // imgPickAxe.destroy();
    // txtPickAxe.destroy();
    indiceBotao = 0;
    stateLoja = false;
}
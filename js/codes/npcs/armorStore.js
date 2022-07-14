function comprarScoob() {
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

    textoNome = game.add.text(0, 0, cachefala.cidade[10].nome + "'s shop", { font: "15px Arial", fill: "#e7dfea" , fontSize: "30px", fontWeight: "bold"} );
    textoNome.fixedToCamera = true;
    textoNome.cameraOffset.setTo(10, 60);

    miniBotao("X",735, 110, fecharLojaScoob);

    imgshortSword = game.add.image(0,0, 'bronzeSet');
    imgshortSword.fixedToCamera = true;
    imgshortSword.cameraOffset.setTo(10, 150);
    imgshortSword.scale.setTo(2.0,2.0);

    txtshortSword = game.add.text(0,0, "Bronze Set                         500g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtshortSword.fixedToCamera = true;
    txtshortSword.cameraOffset.setTo(100, 170);

    if(armadura == 0){
        botao("Buy",500, 150, comprarBronzeArmor);
    }
    else{
        txtshortSword.text = "Bronze Set                         Bought";
    }

    function comprarBronzeArmor(){
        if(gold >= 500){
            gold = gold - 500;
            txtshortSword.text = "Bronze Set                         Bought";
            txtlongSword.text = "Iron Set                         1000g";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            botao("Buy",500, 250, comprarIronArmor);
            armadura = 1;
        }
    }

    imglongSword = game.add.image(0,0, 'ironSet');
    imglongSword.fixedToCamera = true;
    imglongSword.cameraOffset.setTo(10, 250);
    imglongSword.scale.setTo(2.0,2.0);

    txtlongSword = game.add.text(0,0, "Iron Set                          1000g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtlongSword.fixedToCamera = true;
    txtlongSword.cameraOffset.setTo(100, 270);

    if(armadura == 1){
        botao("Buy",500, 250, comprarIronArmor);
    }
    else if(armadura == 0){
        txtlongSword.text = "Iron Set                         Need Bronze Set";
    }
    else{
        txtlongSword.text = "Iron Set                         Bought";
    }

    function comprarIronArmor(){
        if(gold >= 800){
            gold = gold - 800;
            txtlongSword.text = "Iron Set                         Bought";
            txtlargeSword.text = "Steel Set                         1300g";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            botao("Buy",500, 350, comprarSteelSet);
            armadura = 2;
        }
    }

    imglargeSword = game.add.image(0,0, 'steelSet');
    imglargeSword.fixedToCamera = true;
    imglargeSword.cameraOffset.setTo(10, 350);
    imglargeSword.scale.setTo(2.0,2.0);

    txtlargeSword = game.add.text(0,0, "Steel Set                         1300g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtlargeSword.fixedToCamera = true;
    txtlargeSword.cameraOffset.setTo(100, 370);

    if(armadura == 2){
        botao("Buy",500, 350, comprarSteelSet);
    }
    else if(armadura == 0 || armadura == 1){
        txtlargeSword.text = "Steel Set                         Need Iron Set";
    }
    else{
        txtlargeSword.text = "Steel Set                         Bought";
    }

    function comprarSteelSet(){
        if(gold >= 1300){
            gold = gold - 1300;
            txtlargeSword.text = "Steel Set                         Bought";
            txtMagicSet.text = "Magic Set                         1800g";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            botao("Buy",500, 450, comprarMagicSet);
            armadura = 3;
        }
    }

    imggreatSword = game.add.image(0,0, 'magicSet');
    imggreatSword.fixedToCamera = true;
    imggreatSword.cameraOffset.setTo(10, 450);
    imggreatSword.scale.setTo(2.0,2.0);

    txtMagicSet = game.add.text(0,0, "Magic Set                         1800g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtMagicSet.fixedToCamera = true;
    txtMagicSet.cameraOffset.setTo(100, 470);

    if(armadura == 3){
        botao("Buy",500, 450, comprarMagicSet);
    }
    else if(armadura == 0 || armadura == 1 || armadura == 2){
        txtMagicSet.text = "Magic Set                         Need Steel Set";
    }
    else{
        txtMagicSet.text = "Magic Set                         Bought";
    }

    function comprarMagicSet(){
        if(gold >= 1800){
            gold = gold - 1800;
            txtMagicSet.text = "Magic Set                         Bought";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            armadura = 4;
        }
    }
}

function sairScoob(){
    campoTexto.destroy();
    textoNome.destroy();
    textoFala.destroy();
    ctroleFala = true;
    pau = true;
    button[0].destroy();
    button[1].destroy();
    indiceBotao = 0;
}

function fecharLojaScoob() {
    campoLoja.destroy();
    textoNome.destroy();
    for(i = 0; i < button.length; i++){
        button[i].destroy();
    }
    imgshortSword.destroy();
    txtshortSword.destroy();
    imglongSword.destroy();
    txtlongSword.destroy();
    imglargeSword.destroy();
    txtlargeSword.destroy();
    imggreatSword.destroy();
    txtlargeSword.destroy();
    imggreatSword.destroy();
    txtMagicSet.destroy();
    indiceBotao = 0;
    stateLoja = false;
}
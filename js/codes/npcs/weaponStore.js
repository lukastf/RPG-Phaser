function comprarAugusto() {
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

    textoNome = game.add.text(0, 0, cachefala.cidade[8].nome + "'s shop", { font: "15px Arial", fill: "#e7dfea" , fontSize: "30px", fontWeight: "bold"} );
    textoNome.fixedToCamera = true;
    textoNome.cameraOffset.setTo(10, 60);

    miniBotao("X",735, 110, fecharLojaAugusto);

    imgshortSword = game.add.image(0,0, 'shortSword');
    imgshortSword.fixedToCamera = true;
    imgshortSword.cameraOffset.setTo(10, 150);
    imgshortSword.scale.setTo(2.0,2.0);

    txtshortSword = game.add.text(0,0, "Short Sword                         300g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtshortSword.fixedToCamera = true;
    txtshortSword.cameraOffset.setTo(100, 170);

    if(arma == 0){
        botao("Buy",500, 150, comprarShortSword);
    }
    else{
        txtshortSword.text = "Short Sword                         Bought";
    }

    function comprarShortSword(){
        if(gold >= 300){
            gold = gold - 300;
            txtshortSword.text = "Short Sword                         Bought";
            txtlongSword.text = "Long Sword                         800g";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            botao("Buy",500, 250, comprarLongSword);
            arma = 1;
        }
    }

    imglongSword = game.add.image(0,0, 'longSword');
    imglongSword.fixedToCamera = true;
    imglongSword.cameraOffset.setTo(10, 250);
    imglongSword.scale.setTo(2.0,2.0);

    txtlongSword = game.add.text(0,0, "Long Sword                          800g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtlongSword.fixedToCamera = true;
    txtlongSword.cameraOffset.setTo(100, 270);

    if(arma == 1){
        botao("Buy",500, 250, comprarLongSword);
    }
    else if(arma == 0){
        txtlongSword.text = "Long Sword                         Need Short Sword";
    }
    else{
        txtlongSword.text = "Long Sword                         Bought";
    }

    function comprarLongSword(){
        if(gold >= 800){
            gold = gold - 800;
            txtlongSword.text = "Long Sword                         Bought";
            txtlargeSword.text = "Large Sword                         1300g";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            botao("Buy",500, 350, comprarLargeSword);
            arma = 2;
        }
    }

    imglargeSword = game.add.image(0,0, 'largeSword');
    imglargeSword.fixedToCamera = true;
    imglargeSword.cameraOffset.setTo(10, 350);
    imglargeSword.scale.setTo(2.0,2.0);

    txtlargeSword = game.add.text(0,0, "Large Sword                         1300g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtlargeSword.fixedToCamera = true;
    txtlargeSword.cameraOffset.setTo(100, 370);

    if(arma == 2){
        botao("Buy",500, 350, comprarLargeSword);
    }
    else if(arma == 0 || arma == 1){
        txtlargeSword.text = "Large Sword                         Need Long Sword";
    }
    else{
        txtlargeSword.text = "Large Sword                         Bought";
    }

    function comprarLargeSword(){
        if(gold >= 1300){
            gold = gold - 1300;
            txtlargeSword.text = "Large Sword                         Bought";
            txtgreatSword.text = "Great Sword                         1800g";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            botao("Buy",500, 450, comprarGreatSword);
            arma = 3;
        }
    }

    imggreatSword = game.add.image(0,0, 'greatSword');
    imggreatSword.fixedToCamera = true;
    imggreatSword.cameraOffset.setTo(10, 450);
    imggreatSword.scale.setTo(2.0,2.0);

    txtgreatSword = game.add.text(0,0, "Great Sword                         1800g", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    txtgreatSword.fixedToCamera = true;
    txtgreatSword.cameraOffset.setTo(100, 470);

    if(arma == 3){
        botao("Buy",500, 450, comprarGreatSword);
    }
    else if(arma == 0 || arma == 1 || arma == 2){
        txtgreatSword.text = "Great Sword                         Need Large Sword";
    }
    else{
        txtgreatSword.text = "Great Sword                         Bought";
    }

    function comprarGreatSword(){
        if(gold >= 1800){
            gold = gold - 1800;
            txtgreatSword.text = "Great Sword                         Bought";
            //interfaceGrafica();
            textoGold.text = gold;
            for(i = 1; i < button.length; i++){
                button[i].destroy();
                button[i].text.destroy();
            }
            arma = 4;
        }
    }
}

function sairAugusto(){
    campoTexto.destroy();
    textoNome.destroy();
    textoFala.destroy();
    ctroleFala = true;
    pau = true;
    button[0].destroy();
    button[1].destroy();
    indiceBotao = 0;
}

function fecharLojaAugusto() {
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
    txtgreatSword.destroy();
    indiceBotao = 0;
    stateLoja = false;
}
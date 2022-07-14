function interfaceGrafica() {
    spriteGold = game.add.image(0,0, 'goldAlex');
    spriteGold.scale.setTo(0.7,0.7);
    spriteGold.fixedToCamera = true;
    spriteGold.cameraOffset.setTo(633,0);
    textoGold = game.add.text(0,0, gold, { font: "15px Arial", fill: "#e7dfea" , fontSize: "25px", fontWeight: "bold"});
    textoGold.fixedToCamera = true;
    textoGold.cameraOffset.setTo(700,5);

    botaoEquip = game.add.button(0, 0, 'miniBotao', botaoEquip, this, 2, 1, 0);
    //botaoEquip.name = name;
    botaoEquip.smoothed = false;
    botaoEquip.fixedToCamera = true;
    botaoEquip.cameraOffset.setTo(630, 40);
    botaoEquip.img = game.add.image(0,0, 'equips');
    botaoEquip.img.fixedToCamera = true;
    botaoEquip.img.cameraOffset.setTo(637,43);
    botaoEquip.img.scale.setTo(1.3,1.3);
    
    function fecharEquip(){
        campoEquip.destroy();
        textoNome.destroy();
        imgSword.destroy();
        txtSword.destroy();
        imgSet.destroy();
        txtSet.destroy();
        imgHerb.destroy();
        txtHerb.destroy();
        imgWaterBottle.destroy();
        txtWaterBottle.destroy();
        if (picareta) {
            imgPick.destroy();
            txtPick.destroy();
        }
        imgLifeOrb.destroy();
        txtLifeOrb.destroy();
        imgManaOrb.destroy();
        txtManaOrb.destroy();
        button[0].destroy();
        button[0].text.destroy();
        indiceBotao = 0;
        stateJanela = false;
    }
    
    function botaoEquip(){
        if(stateJanela == false){
            stateJanela = true;
            campoEquip = game.add.image(0, 0, 'campoLoja');
            campoEquip.fixedToCamera = true;
            campoEquip.cameraOffset.setTo(0, 50);

            
            textoNome = game.add.text(0, 0, "Equipments", { font: "15px Arial", fill: "#e7dfea" , fontSize: "30px", fontWeight: "bold"} );
            textoNome.fixedToCamera = true;
            textoNome.cameraOffset.setTo(10, 60);
            
            if (arma == 0) {
                imgSword = game.add.image(0,0, 'dagger');
                txtSword = game.add.text(0,0, "Dagger Sword", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (arma == 1) {
                imgSword = game.add.image(0,0, 'shortSword');
                txtSword = game.add.text(0,0, "Short Sword", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (arma == 2) {
                imgSword = game.add.image(0,0, 'longSword');
                txtSword = game.add.text(0,0, "Long Sword", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (arma == 3) {
                imgSword = game.add.image(0,0, 'largeSword');
                txtSword = game.add.text(0,0, "Large Sword", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (arma == 4) {
                imgSword = game.add.image(0,0, 'greatSword');
                txtSword = game.add.text(0,0, "Great Sword", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } 
            // else if (arma == 5) {
            //     imgSword = game.add.image(0,0, 'magicSword');
            // txtSword = game.add.text(0,0, "Magic Sword", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            // }

            if (armadura == 0) {
                imgSet = game.add.image(0,0, 'leatherSet');
                txtSet = game.add.text(0,0, "Leather Set", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (armadura == 1) {
                imgSet = game.add.image(0,0, 'bronzeSet');
                txtSet = game.add.text(0,0, "Bronze Set", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (armadura == 2) {
                imgSet = game.add.image(0,0, 'ironSet');
                txtSet = game.add.text(0,0, "Iron Set", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (armadura == 3) {
                imgSet = game.add.image(0,0, 'steelSet');
                txtSet = game.add.text(0,0, "Steel Set", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } else if (armadura == 4) {
                imgSet = game.add.image(0,0, 'magicSet');
                txtSet = game.add.text(0,0, "Magic Set", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
            } 

            // img alex set
            imgSet.fixedToCamera = true;
            imgSet.cameraOffset.setTo(10, 150);
            imgSet.scale.setTo(2.0,2.0);

            txtSet.fixedToCamera = true;
            txtSet.cameraOffset.setTo(100, 170);

            // img alex weapon
            imgSword.fixedToCamera = true;
            imgSword.cameraOffset.setTo(300, 150);
            imgSword.scale.setTo(2.0,2.0);

            txtSword.fixedToCamera = true;
            txtSword.cameraOffset.setTo(400, 170);


            // herbs
            imgHerb = game.add.image(0,0, 'herb');
            txtHerb = game.add.text(0,0, "Herb x " + herb, { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );

            imgHerb.fixedToCamera = true;
            imgHerb.cameraOffset.setTo(10, 280);
            imgHerb.scale.setTo(2.0,2.0);

            txtHerb.fixedToCamera = true;
            txtHerb.cameraOffset.setTo(100, 300);

            // water bottle
            imgWaterBottle = game.add.image(0,0, 'waterBottle');
            txtWaterBottle = game.add.text(0,0, "Water Bottle x " + waterBottle, { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );

            imgWaterBottle.fixedToCamera = true;
            imgWaterBottle.cameraOffset.setTo(300, 280);
            imgWaterBottle.scale.setTo(2.0,2.0);

            txtWaterBottle.fixedToCamera = true;
            txtWaterBottle.cameraOffset.setTo(400, 300);

            // pickaxe
            if (picareta) {
                imgPick = game.add.image(0,0, 'pickaxe');
                txtPick = game.add.text(0,0, "Pickaxe", { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );
    
                imgPick.fixedToCamera = true;
                imgPick.cameraOffset.setTo(600, 300);
                imgPick.scale.setTo(2.0,2.0);
    
                txtPick.fixedToCamera = true;
                txtPick.cameraOffset.setTo(700, 320);
            }

            // life orb
            imgLifeOrb = game.add.image(0,0, 'lifeOrb');
            txtLifeOrb = game.add.text(0,0, "Life Orb x " + lifeOrb, { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );

            imgLifeOrb.fixedToCamera = true;
            imgLifeOrb.cameraOffset.setTo(10, 400);
            imgLifeOrb.scale.setTo(2.0,2.0);

            txtLifeOrb.fixedToCamera = true;
            txtLifeOrb.cameraOffset.setTo(100, 420);

            // mana orb
            imgManaOrb = game.add.image(0,0, 'manaOrb');
            txtManaOrb = game.add.text(0,0, "Mana Orb x " + manaOrb, { font: "15px Arial", fill: "#e7dfea" , fontSize: "20px", fontWeight: "bold"} );

            imgManaOrb.fixedToCamera = true;
            imgManaOrb.cameraOffset.setTo(300, 400);
            imgManaOrb.scale.setTo(2.0,2.0);

            txtManaOrb.fixedToCamera = true;
            txtManaOrb.cameraOffset.setTo(400, 420);

            miniBotao("X",735, 110, fecharEquip);

        } else {
           fecharEquip();
        }
    }

    botaoRings = game.add.button(0, 0, 'miniBotao', botaoRings, this, 2, 1, 0);
    //botaoEquip.name = name;
    botaoRings.smoothed = false;
    botaoRings.fixedToCamera = true;
    botaoRings.cameraOffset.setTo(680, 40);
    botaoRings.img = game.add.image(0,0, 'rings');
    botaoRings.img.fixedToCamera = true;
    botaoRings.img.cameraOffset.setTo(687,38);
    botaoRings.img.scale.setTo(1.3,1.3);

    function botaoRings(){

    }

    botaoConfigs = game.add.button(0, 0, 'miniBotao', botaoConfigs, this, 2, 1, 0);
    //botaoEquip.name = name;
    botaoConfigs.smoothed = false;
    botaoConfigs.fixedToCamera = true;
    botaoConfigs.cameraOffset.setTo(730, 40);
    botaoConfigs.img = game.add.image(0,0, 'configs');
    botaoConfigs.img.fixedToCamera = true;
    botaoConfigs.img.cameraOffset.setTo(740,43);
    //botaoConfigs.img.scale.setTo(1.3,1.3);

    function botaoConfigs(){

    }

    //miniBotao();
}
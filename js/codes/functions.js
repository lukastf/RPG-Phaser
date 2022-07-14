
function moveMonsterPacote(){
    moveMonster(slime1);
    moveMonster(slime2);
    moveMonster(slime3);
    moveMonster(slime4);
    moveMonster(slime5);
    moveMonster(slime6);
    moveMonster(slime7);
    moveMonster(slime8);
    moveMonster(slime9);
    moveMonster(slime10);
    moveMonster(slime11);
    moveMonster(slime12);
    moveMonster(slime13);
    moveMonster(slime14);
    moveMonster(slime15);
    moveMonster(slime16);
    moveMonster(slime17);
    moveMonster(slime18);
    moveMonster(slime19);
    moveMonster(slime20);
    moveMonster(slime21);
    moveMonster(slime22);
    moveMonster(slime23);
}

function atkMonsterBaixo(){
    atkBaixo(slime1);
    atkBaixo(slime2);
    atkBaixo(slime3);
    atkBaixo(slime4);
    atkBaixo(slime5);
    atkBaixo(slime6);
    atkBaixo(slime7);
    atkBaixo(slime8);
    atkBaixo(slime9);
    atkBaixo(slime10);
    atkBaixo(slime11);
    atkBaixo(slime12);
    atkBaixo(slime13);
    atkBaixo(slime14);
    atkBaixo(slime15);
    atkBaixo(slime16);
    atkBaixo(slime17);
    atkBaixo(slime18);
    atkBaixo(slime19);
    atkBaixo(slime20);
    atkBaixo(slime21);
    atkBaixo(slime22);
    atkBaixo(slime23);
}

function atkMonsterDireita(){
    atkDireita(slime1);
    atkDireita(slime2);
    atkDireita(slime3);
    atkDireita(slime4);
    atkDireita(slime5);
    atkDireita(slime6);
    atkDireita(slime7);
    atkDireita(slime8);
    atkDireita(slime9);
    atkDireita(slime10);
    atkDireita(slime11);
    atkDireita(slime12);
    atkDireita(slime13);
    atkDireita(slime14);
    atkDireita(slime15);
    atkDireita(slime16);
    atkDireita(slime17);
    atkDireita(slime18);
    atkDireita(slime19);
    atkDireita(slime20);
    atkDireita(slime21);
    atkDireita(slime22);
    atkDireita(slime23);
}

function atkMonsterEsquerda(){
    atkEsquerda(slime1);
    atkEsquerda(slime2);
    atkEsquerda(slime3);
    atkEsquerda(slime4);
    atkEsquerda(slime5);
    atkEsquerda(slime6);
    atkEsquerda(slime7);
    atkEsquerda(slime8);
    atkEsquerda(slime9);
    atkEsquerda(slime10);
    atkEsquerda(slime11);
    atkEsquerda(slime12);
    atkEsquerda(slime13);
    atkEsquerda(slime14);
    atkEsquerda(slime15);
    atkEsquerda(slime16);
    atkEsquerda(slime17);
    atkEsquerda(slime18);
    atkEsquerda(slime19);
    atkEsquerda(slime20);
    atkEsquerda(slime21);
    atkEsquerda(slime22);
    atkEsquerda(slime23);
}

function atkMonsterCima(){
    atkCima(slime1);
    atkCima(slime2);
    atkCima(slime3);
    atkCima(slime4);
    atkCima(slime5);
    atkCima(slime6);
    atkCima(slime7);
    atkCima(slime8);
    atkCima(slime9);
    atkCima(slime10);
    atkCima(slime11);
    atkCima(slime12);
    atkCima(slime13);
    atkCima(slime13);
    atkCima(slime14);
    atkCima(slime15);
    atkCima(slime16);
    atkCima(slime17);
    atkCima(slime18);
    atkCima(slime19);
    atkCima(slime20);
    atkCima(slime21);
    atkCima(slime22);
    atkCima(slime23);
}

function monsterDeathPacote(){
    monsterDeath(slime1, 1);
    monsterDeath(slime2, 1);
    monsterDeath(slime3, 1);
    monsterDeath(slime4, 1);
    monsterDeath(slime5, 1);
    monsterDeath(slime6, 1);
    monsterDeath(slime7, 1);
    monsterDeath(slime8, 1);
    monsterDeath(slime9, 1);
    monsterDeath(slime10, 1);  
    monsterDeath(slime11, 1);  
    monsterDeath(slime12, 1);   
    monsterDeath(slime13, 1);
    monsterDeath(slime14, 1);
    monsterDeath(slime15, 1);
    monsterDeath(slime16, 1);
    monsterDeath(slime17, 1);
    monsterDeath(slime18, 1);
    monsterDeath(slime19, 1);
    monsterDeath(slime20, 1);
    monsterDeath(slime21, 1);
    monsterDeath(slime22, 1);
    monsterDeath(slime23, 1);
}

function falarNpcPacote(){
    falar(npc1);
    falar(npc2);
    falar(npc3);
    falar(npc4);
    falar(npc5);
    falar(npc6);
    falar(npc7);
}

function botao(name, x, y, click){

    button[indiceBotao] = game.add.button(0, 0, 'botao', click, this, 2, 1, 0);
    button[indiceBotao].name = name;
    button[indiceBotao].smoothed = false;
    button[indiceBotao].fixedToCamera = true;
    button[indiceBotao].cameraOffset.setTo(x, y)
    button[indiceBotao].text = game.add.text(x + 30, y + 13, name, { font: "30px Arial", fill: "#000000" });
    indiceBotao ++;
}

function miniBotao(name, x, y, click){

    button[indiceBotao] = game.add.button(0, 0, 'miniBotao', click, this, 2, 1, 0);
    button[indiceBotao].fixedToCamera = true;
    button[indiceBotao].name = name;
    button[indiceBotao].smoothed = false;
    button[indiceBotao].cameraOffset.setTo(x, y);
    button[indiceBotao].text = game.add.text(x + 15, y + 5, name, { font: "30px Arial", fill: "#000000" });
    button[indiceBotao].text.fixedToCamera = true;
    indiceBotao ++;
}
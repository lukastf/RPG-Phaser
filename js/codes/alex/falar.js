function falar(npc){
    if (stateLoja == false){

    if(game.input.keyboard.justPressed(Phaser.Keyboard.T) && pau == false){
        if(spriteAlex.body.x >= npc.body.x - 40 && spriteAlex.body.x <= npc.body.x + 40 && spriteAlex.body.y >= npc.body.y - 40 && spriteAlex.body.y <= npc.body.y + 40){

        }
        else{
            campoTexto.destroy(true);
            textoNome.destroy(true);
            textoFala.destroy(true);
            ctroleFala = true;
            pau = true;
            if(npc.id == 8 || npc.id == 9 || npc.id == 10){
                button[0].destroy();
                button[1].destroy();
                indiceBotao = 0;
            }
        }
    }

    if(game.input.keyboard.justPressed(Phaser.Keyboard.T) && ctroleFala == true){
        if(spriteAlex.body.x >= npc.body.x - 40 && spriteAlex.body.x <= npc.body.x + 40 && spriteAlex.body.y >= npc.body.y - 40 && spriteAlex.body.y <= npc.body.y + 40){
            campoTexto = game.add.image(0, 0, 'campoTexto');
            campoTexto.fixedToCamera = true;
            campoTexto.cameraOffset.setTo(0, 350);

            textoNome = game.add.text(0, 0, cachefala.cidade[npc.id].nome, { font: "15px Arial", fill: "#e7dfea" , fontSize: "30px", fontWeight: "bold"} );
            textoNome.fixedToCamera = true;
            textoNome.cameraOffset.setTo(10, 360);

            textoFala = game.add.text(0,0, "", { font: "15px Arial", fill: "#e7dfea" , fontSize: "25px", fontWeight: "bold"});
            textoFala.fixedToCamera = true;
            textoFala.cameraOffset.setTo(10, 420);
            fala = cachefala.cidade[npc.id].fala[estadoProgresso];
            wordIndex = 0;
            lineIndex = 0;
            ctroleFala = false;
            nextLine();
            game.time.events.add(Phaser.Timer.SECOND * 2, alavanca2, this);
            //game.time.events.add(Phaser.Timer.SECOND * 1, alavanca3, this);
            
            //ctroleFalarapida = false;
            if(npc.id == 8){
                botao("Buy",50, 500, comprarAugusto);
                botao("Leave",300, 500, sairAugusto);
            }
            if(npc.id == 9){
                botao("Buy",50, 500, comprarLupus);
                botao("Leave",300, 500, sairLupus);
            }
            if(npc.id == 10){
                botao("Buy",50, 500, comprarScoob);
                botao("Leave",300, 500, sairScoob);
            }
            
        }
    }
    //if(game.input.keyboard.justPressed(Phaser.Keyboard.T) && ctroleFalarapida == false){
        //if(spriteAlex.body.x >= npc.body.x - 40 && spriteAlex.body.x <= npc.body.x + 40 && spriteAlex.body.y >= npc.body.y - 40 && spriteAlex.body.y <= npc.body.y + 40){
           // wordDelay = 50;
           // ctroleFalarapida = true;
        //}
    //}
    }
}

function alavanca2(){
    pau = false;
}

//function alavanca3(){
//    ctroleFalarapida = false;
//}


function nextLine() {

    if (lineIndex == fala.length)
    {
        //  We're finished
        return;
    }

    //  Split the current line on spaces, so one word per array element
    line = fala[lineIndex].split(' ');

    //  Reset the word index to zero (the first word in the line)
    wordIndex = 0;

    //  Call the 'nextWord' function once for each word in the line (line.length)
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

}

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    textoFala.text = textoFala.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex == line.length)
    {
        //  Add a carriage return
        textoFala.text = textoFala.text.concat("\n");
        console.log(wordIndex);
        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    }

}
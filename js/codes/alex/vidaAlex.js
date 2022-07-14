function vidaAlex(vida) {
    for(i = 0; i < vida; i++) {
        spriteVida[i] = game.add.sprite(0, 0, 'vidaAlex');
        spriteVida[i].scale.setTo(0.5,0.5);
        spriteVida[i].fixedToCamera = true;
        spriteVida[i].cameraOffset.setTo(50*i, 0);
        game.time.events.add(Phaser.Timer.SECOND * 1, alavanca, this);
        //spriteVida.kill();
    }
}

function alavanca(){
    ctroleVida = true;
}

function destruirVidaSprite(vida) {
    for(i = 0; i < vida; i++) {
        spriteVida[i].destroy();
    }
}
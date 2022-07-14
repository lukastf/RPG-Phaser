function moveAlex(spriteAlex){

    game.camera.follow(spriteAlex);

    spriteAlex.body.velocity.x = 0;
    spriteAlex.body.velocity.y = 0;
    
    if (cursors.up.isDown) {
        spriteAlex.body.velocity.y = -100;
    }

    else {
         spriteAlex.animations.stop('andarCima', true);
    }
    
    if (cursors.down.isDown) {
        spriteAlex.body.velocity.y = 100;
    }

    else {
        spriteAlex.animations.stop('andarBaixo', true);
    }

    if (cursors.left.isDown){
        spriteAlex.body.velocity.x = -100;
    }

    else {
        spriteAlex.animations.stop('andarEsquerda', true);
    }

    if (cursors.right.isDown){
        spriteAlex.body.velocity.x = 100;
    }

    else {
        spriteAlex.animations.stop('andarDireita', true);
    }

    if (spriteAlex.body.velocity.x !== 0 && spriteAlex.body.velocity.y !== 0){
        //movimento diagonal
        if (spriteAlex.body.velocity.x > 0 && spriteAlex.body.velocity.y > 0){
            //direita pra baixo
            spriteAlex.animations.play('andarDireita', 10);
        }
        if (spriteAlex.body.velocity.x > 0 && spriteAlex.body.velocity.y < 0){
            //direita pra cima
            spriteAlex.animations.play('andarDireita', 10);
        }
        if (spriteAlex.body.velocity.x < 0 && spriteAlex.body.velocity.y > 0){
            //esquerda pra baixo
            spriteAlex.animations.play('andarEsquerda', 10);
        }
        if (spriteAlex.body.velocity.x < 0 && spriteAlex.body.velocity.y < 0){
            //esquerda pra cima
            spriteAlex.animations.play('andarEsquerda', 10);
        }
    }
    else if (spriteAlex.body.velocity.x !== 0 && spriteAlex.body.velocity.y == 0){
        if (spriteAlex.body.velocity.x > 0){
            //direita
            spriteAlex.animations.play('andarDireita', 10);
        }
        if (spriteAlex.body.velocity.x < 0){
            //esquerda
            spriteAlex.animations.play('andarEsquerda', 10);
        }
    }
    else if (spriteAlex.body.velocity.x == 0 && spriteAlex.body.velocity.y !== 0){
        if (spriteAlex.body.velocity.y > 0){
            //baixo
            spriteAlex.animations.play('andarBaixo', 10);
        }
        if (spriteAlex.body.velocity.y < 0){
            //cima
            spriteAlex.animations.play('andarCima', 10);
        }
    }
}
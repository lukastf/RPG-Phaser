function atkAlex(){

    if(game.input.keyboard.justPressed(Phaser.Keyboard.Z)){

        //ctroleVidaContato = true;

        if(spriteAlex.animations.getAnimation('andarBaixo') == spriteAlex.animations.currentAnim || spriteAlex.animations.getAnimation('atkBaixo') == spriteAlex.animations.currentAnim){
            spriteAlex.animations.play('atkBaixo', 13);
            atkMonsterBaixo();
        }
        else if(spriteAlex.animations.getAnimation('andarDireita') == spriteAlex.animations.currentAnim || spriteAlex.animations.getAnimation('atkDireita') == spriteAlex.animations.currentAnim){
            spriteAlex.animations.play('atkDireita', 13);
            atkMonsterDireita();
        }
        else if(spriteAlex.animations.getAnimation('andarEsquerda') == spriteAlex.animations.currentAnim || spriteAlex.animations.getAnimation('atkEsquerda') == spriteAlex.animations.currentAnim){
            spriteAlex.animations.play('atkEsquerda', 13);
            atkMonsterEsquerda();
        }
        else if(spriteAlex.animations.getAnimation('andarCima') == spriteAlex.animations.currentAnim || spriteAlex.animations.getAnimation('atkCima') == spriteAlex.animations.currentAnim){
            spriteAlex.animations.play('atkCima', 13);
            atkMonsterCima();
        }

        //game.physics.arcade.collide(spriteAlex, spriteMonster, danoEspada);
    }
}

function atkBaixo(spriteMonster){
    if(spriteMonster.body.x >= spriteAlex.body.x - 30 && spriteMonster.body.x <= spriteAlex.body.x + 30 && spriteMonster.body.y >= spriteAlex.body.y && spriteMonster.body.y <= spriteAlex.body.y + 40){
        spriteMonster.vida = spriteMonster.vida - (arma + 1);
        tween = game.add.tween(spriteMonster);
        tween.to({ y: spriteMonster.y + 30 }, 300, 'Linear', true, 0);
    }
}

function atkDireita(spriteMonster){
    if(spriteMonster.body.x >= spriteAlex.body.x && spriteMonster.body.x <= spriteAlex.body.x + 40 && spriteMonster.body.y >= spriteAlex.body.y - 30 && spriteMonster.body.y <= spriteAlex.body.y + 30){
        spriteMonster.vida = spriteMonster.vida - (arma + 1);
        tween = game.add.tween(spriteMonster);
        tween.to({ x: spriteMonster.x + 30 }, 300, 'Linear', true, 0);
    }
}

function atkEsquerda(spriteMonster){
    if(spriteMonster.body.x <= spriteAlex.body.x && spriteMonster.body.x >= spriteAlex.body.x - 40 && spriteMonster.body.y >= spriteAlex.body.y - 30 && spriteMonster.body.y <= spriteAlex.body.y + 30){
        spriteMonster.vida = spriteMonster.vida - (arma + 1);
        tween = game.add.tween(spriteMonster);
        tween.to({ x: spriteMonster.x - 30 }, 300, 'Linear', true, 0);
    }
}

function atkCima(spriteMonster){
    if(spriteMonster.body.x >= spriteAlex.body.x - 30 && spriteMonster.body.x <= spriteAlex.body.x + 30 && spriteMonster.body.y <= spriteAlex.body.y && spriteMonster.body.y >= spriteAlex.body.y - 40){
        spriteMonster.vida = spriteMonster.vida - (arma + 1);
        tween = game.add.tween(spriteMonster);
        tween.to({ y: spriteMonster.y - 30 }, 300, 'Linear', true, 0);
    }
}
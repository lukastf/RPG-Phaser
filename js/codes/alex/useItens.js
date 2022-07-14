function useItens() {
    // use herb
    if(game.input.keyboard.justPressed(Phaser.Keyboard.H)){
        if (vida >= 10 || herb <= 0) {
            return;
        }
        vida++;
        herb--;
        var spriteVida = [];
        destruirVidaSprite(vida);
        //spriteVida = [];
        vidaAlex(vida);
    }

    // use life orb
    if(game.input.keyboard.justPressed(Phaser.Keyboard.X)){
        if (vida >= 10 || lifeOrb <= 0) {
            return;
        }
        diferenca = 10 - vida;

        if (vida > 5) {
            vida = vida + diferenca;
        } else {
            vida += 5;
        }

        lifeOrb--;
        var spriteVida = [];
        destruirVidaSprite(vida);
        //spriteVida = [];
        vidaAlex(vida);
    }

    // use mana orb
    if(game.input.keyboard.justPressed(Phaser.Keyboard.C)){
        if (vida >= 10 || manaOrb <= 0) {
            return;
        }
        mana -= 5;
        manaOrb--;
        //vidaAlex(vida);
    }
}
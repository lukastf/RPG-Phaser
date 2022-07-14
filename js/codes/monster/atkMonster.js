function atkMonster(){
    if(ctroleVida == true){
        var spriteVida = [];
        destruirVidaSprite(vida);

        danoReal = armadura - slimes.dano;

        if(danoReal > 0) {
            danoReal = 0;
        }

        vida = vida + danoReal;
        ctroleVida = false;
        //tween = game.add.tween(obj1);
        //tween.to({x:game.rnd.integerInRange(-50,50) + obj2.body.x, y:game.rnd.integerInRange(-50,50) + obj2.body.y }, 300, 'Linear', true, 0);
        vidaAlex(vida);
    }

}
function monsterDeath(monster, loot){
    if(monster.vida <= 0){
        monster.kill();

        gold = gold + loot;
        textoGold.text = gold;
        monster.vida = undefined;
    }
}
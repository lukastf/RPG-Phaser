function moveMonster(spriteSlime) {

    spriteSlime.body.velocity.x = 0;
    spriteSlime.body.velocity.y = 0;
    
    if(spriteAlex.body.x >= spriteSlime.body.x - 200 && spriteAlex.body.x <= spriteSlime.body.x + 200 && spriteAlex.body.y >= spriteSlime.body.y - 200 && spriteAlex.body.y <= spriteSlime.body.y + 200){
       //if(spriteAlex.body.x >= spriteSlime.body.x - 35 && spriteAlex.body.x <= spriteSlime.body.x + 35 && spriteAlex.body.y >= spriteSlime.body.y - 35 && spriteAlex.body.y <= spriteSlime.body.y + 35){
       //    spriteSlime.body.velocity.x = 0;
       //    spriteSlime.body.velocity.y = 0;
           //life = life - 1;
        //}
       // else{
            game.physics.arcade.moveToObject(spriteSlime, spriteAlex, 50);
       // }
    }
}
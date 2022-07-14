function preloadInterfaceGrafica (atual) {
    atual.load.image('vidaAlex', 'assets/vidaAlex.png');
    atual.load.image('goldAlex', 'assets/gold.png');
    atual.load.image('campoTexto', 'assets/campoTexto.png');
    atual.load.image('campoLoja', 'assets/campoLoja.png');
    atual.load.image('equips', 'assets/equips.png');
    atual.load.image('rings', 'assets/rings.png');
    atual.load.image('configs', 'assets/configs.png');
}

function preloadLoja (atual) {
    atual.load.tilemap('map', 'js/maps/shop/shop.json', null, Phaser.Tilemap.TILED_JSON);
    atual.load.json('falas', 'js/codes/falas.json');

    atual.load.image('pisos', 'assets/pisos.png');
    atual.load.image('parede', 'assets/parede.png');
    atual.load.image('janela', 'assets/janela.png');
    atual.load.image('balcao', 'assets/balcao.png');
    atual.load.image('porta', 'assets/porta.png');
}

function preloadItens (atual) {
    // swords
    atual.load.image('dagger', 'assets/swords/dagger.png', 32, 32);
    atual.load.image('shortSword', 'assets/swords/short sword.png', 32, 32);
    atual.load.image('longSword', 'assets/swords/long sword.png', 32, 32);
    atual.load.image('largeSword', 'assets/swords/large sword.png', 32, 32);
    atual.load.image('greatSword', 'assets/swords/great sword.png', 32, 32);

    // armors
    atual.load.image('leatherSet', 'assets/armors/leather set.png', 32, 32);
    atual.load.image('bronzeSet', 'assets/armors/bronze set.png', 32, 32);
    atual.load.image('ironSet', 'assets/armors/iron set.png', 32, 32);
    atual.load.image('steelSet', 'assets/armors/steel set.png', 32, 32);
    atual.load.image('magicSet', 'assets/armors/magic set.png', 32, 32);

    // itens
    atual.load.image('herb', 'assets/potions/herb.png', 32, 32);
    atual.load.image('waterBottle', 'assets/potions/water bottle.png', 32, 32);
    atual.load.image('lifeOrb', 'assets/potions/life orb.png', 32, 32);
    atual.load.image('manaOrb', 'assets/potions/mana orb.png', 32, 32);
    atual.load.image('pickaxe', 'assets/potions/pick.png', 32, 32);
}
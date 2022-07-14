var game = new Phaser.Game(800, 600, Phaser.AUTO, 'ElementalRing');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('WeaponStore', WeaponStore);
game.state.add('ArmorStore', ArmorStore);
game.state.add('PotionStore', PotionStore);

// water-ring
game.state.add('WaterRingF1', WaterRingF1);
game.state.add('WaterRingF2', WaterRingF2);
game.state.add('WaterRingF3', WaterRingF3);

// earth-ring

game.state.start('Menu');
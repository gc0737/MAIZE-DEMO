import Phaser from './lib/phaser.js';
import { MazeStart } from './scenes/maze-start.js';
import { preloader } from './scenes/preloader.js';
import { SCENE_KEYS } from './scenes/scene-keys.js';


const config = {
    type: Phaser.CANVAS,
    title: 'MAIZE',
    description: '',
    pixelArt: true,
    scene: [],
    scale: {
        parent: 'gCanvas',
        width: 1280,
        height: 720,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

    },
}

const game = new Phaser.Game(config)

game.scene.add(SCENE_KEYS.PRELOADER, preloader);
game.scene.add(SCENE_KEYS.MAZE_START, MazeStart );
game.scene.start(SCENE_KEYS.PRELOADER);

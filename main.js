import { Start } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    title: 'MAIZE',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#60b2f5ff',
    pixelArt: false,
    scene: [
        Start
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
=======
import { Start } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    title: 'MAIZE',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#60b2f5ff',
    pixelArt: false,
    scene: [
        Start
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
>>>>>>> c1aaae061e7fdf1a69415da04f4576e5679d75af
            

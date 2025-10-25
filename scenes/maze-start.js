import Phaser from '../lib/phaser.js'
import { SCENE_KEYS } from './scene-keys.js';
import { UI_BTNS } from '../assets/asset-keys.js';

export class MazeStart extends Phaser.Scene{
    constructor() {
        super({
            key: SCENE_KEYS.MAZE_START,
        });
        console.log(SCENE_KEYS.MAZE_START);
    }

    create(){
        
    }
}
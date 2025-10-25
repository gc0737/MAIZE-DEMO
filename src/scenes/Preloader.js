import Phaser from '../lib/phaser.js'
import { SCENE_KEYS } from './scene-keys.js';
import { TITLE_BACKGROUND_ASSET_KEYS } from '../assets/asset-keys.js';
import { UI_BTNS } from '../assets/asset-keys.js';

export class preloader extends Phaser.Scene{
    constructor() {
        super({
            key: SCENE_KEYS.PRELOADER,
        });
        console.log(SCENE_KEYS.PRELOADER);
    }

    preload(){
        const maizePath = 'assets';
        //Title Screen
        this.load.image(TITLE_BACKGROUND_ASSET_KEYS.TITLE_BACKGROUD,
            `${maizePath}/MainscreenOF.png`);
        this.load.image(TITLE_BACKGROUND_ASSET_KEYS.LOGO_FRONT,
            `${maizePath}/maize3.png`);
        this.load.image(TITLE_BACKGROUND_ASSET_KEYS.LOGO_1,
            `${maizePath}/maize2.png`);
        this.load.image(TITLE_BACKGROUND_ASSET_KEYS.LOGO_2,
            `${maizePath}/maize1.png`);
        this.load.image(TITLE_BACKGROUND_ASSET_KEYS.LOGO_3,
            `${maizePath}/maize0.png`);
        //Buttons for title screen    
        this.load.image(UI_BTNS.START, `${maizePath}/start.png`);
        this.load.image(UI_BTNS.START_P, `${maizePath}/start_press.png`);
        this.load.image(UI_BTNS.OPTIONS, `${maizePath}/option.png`);
        this.load.image(UI_BTNS.OPTIONS_P, `${maizePath}/option_press.png`);
    }

    create(){
        console.log(this.textures.get('TITLE'));
        this.add.image(0,0,TITLE_BACKGROUND_ASSET_KEYS.TITLE_BACKGROUD).setOrigin(0);

        console.log(this.textures.get('LOGO'));
        const logo1 = this.add.image(640,360,TITLE_BACKGROUND_ASSET_KEYS.LOGO_1).setInteractive(
            new Phaser.Geom.Rectangle(100,800, 300, 250), Phaser.Geom.Rectangle.Contains);
            this.scene,this.input.setHitAreaRectangle(logo1, 640,360)


            
        console.log(this.textures.get('LOGO1'));
        console.log(this.textures.get('LOGO2'));
        console.log(this.textures.get('LOGO3'));
        console.log(this.textures.get('START'));
        console.log(this.textures.get('START_P'));
        console.log(this.textures.get('OPT'));
        console.log(this.textures.get('OPT_P'))



        

    }

    

}
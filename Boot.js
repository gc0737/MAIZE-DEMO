export class Boot extends Phaser.Scene
{
    constructor()
    {
        super('Boot');
    }

    preload()
    {
        this.load.setBaseURL("http://maize.game/");
        this.load.setPath('/assets/');
        this.load.baseURL('start', 'start.png');
        this.load.baseURL('start_p','start_press.png');
        this.load.baseURL('options','option.png');
        this.load.baseURL('option_p', 'option_press.png');
        
    }

    create()
    {
        this.scene.start('Preloader')
    }
}
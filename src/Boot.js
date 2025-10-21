export class Boot extends Phaser.Scene
{
    constructor()
    {
        super('Boot');
    }

    preload()
    {
        this.load.baseURL('start', 'http://localhost/MAIZE-demo/assets/start.png');
        this.load.baseURL('start_p','http://localhost/MAIZE-demo/assets/start_press.png');
        this.load.baseURL('options','http://localhost/MAIZE-demo/assets/option.png');
        this.load.baseURL('option_p', 'http://localhost/MAIZE-demo/assets/option_press.png');
    }

    create()
    {
        this.scene.start('Preloader')
    }
}
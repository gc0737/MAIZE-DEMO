export class Boot extends Phaser.Scene
{
    constructor()
    {
        super('Boot');
    }

    preload()
    {
    this.add.image('start','assets/start.png')
    this.add.image('start_p', 'assets/start_press.png')
    this.add.image('opt', 'assets/option.png')
    this.add.image('opt_p','assets/option_press.png')
    }

    create()
    {
        this.scene.start('Preloader')
    }
}
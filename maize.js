class maize extends Phaser.Scene
{
    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        const sprite = this.add.sprite(400, 300, 'eye').setInteractive();

        sprite.on('pointerdown', function (pointer)
        {

            this.start.

        });

        sprite.on('pointerout', function (pointer)
        {

            this.clearTint();

        });

        sprite.on('pointerup', function (pointer)
        {

            this.clearTint();

        });
    }
}

window.onload(config) = {
    type: Phaser.AUTO,
    title: 'MAIZE',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#60b2f5ff',
    pixelArt: false,
    scene: [Maze_1,Boot,Start,Preloader
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            
export class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader');

}

init(){
    this.add.image(300, 750,'start');
    this.add.image(300, 800, 'option');
}

preload(){
    this.add.image(100, 800,'assets/bubble.png')
    this.add.image(600, 300,'assets/sky.png');
    this.add.image(0,0, 'asset/cloud_1.png');
    this.add.image(600, 0, 'assets/cloud_2.png');
    this.add.image(0,40, 'assets/cloud_dark_1.png');
    this.add.image(650, 0,'assets/cloud_dark_2.png');
    this.add.image(200,1000,'assets/down_arrow.png');
    this.add,image()
}

create(){
    this.scene.start('Game');
}
}
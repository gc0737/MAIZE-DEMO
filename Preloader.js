export class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader');

}

init(){
    this.add.image(300, 750,'start');
    this.add.image(300, 800, 'option');
}

preload(){
   
}

create(){
    this.scene.start('Game');
}
}
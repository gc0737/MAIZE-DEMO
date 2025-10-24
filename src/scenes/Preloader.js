export class Preloader extends Phaser.Scene{
    constructor(){
        super('Preloader');

}

init(){
    var isPress = false;
    var start = this.add.sprite(500, 500, 'start')
    var start_p= this.add.sprite(500,500, 'start_p')
    start.setInteractive();
    start.on('pointerover', () => {console.log('ponterover')})
    
}

preload(){
   
}

create(){
    this.scene.start("Maze_1");
}
}
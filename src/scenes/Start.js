class Start extends Phaser.Scene{
    constructor(){
        super("Boot")
    }

    create(){
        this.add.text(20,20,"Finally...");
        this.scene.start("Preloader");
       

    }
}






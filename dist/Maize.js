var $4b4b77cb78743c42$export$2e2bcd8739ae039 = window.Phaser;



const $c2b0566ac1880872$export$66c061e3f057cec7 = Object.freeze({
    PRELOADER: 'PRELOADER'
});


class $bfe39d89948ae1b8$export$8ddba6b40106a7ae extends (0, $4b4b77cb78743c42$export$2e2bcd8739ae039).Scene {
    constructor(){
        super({
            key: (0, $c2b0566ac1880872$export$66c061e3f057cec7).PRELOADER
        });
        console.log((0, $c2b0566ac1880872$export$66c061e3f057cec7).PRELOADER);
    }
    preload() {}
    create() {}
}



class $79e4e45715fe0db8$var$Main extends (0, $4b4b77cb78743c42$export$2e2bcd8739ae039).Scene {
    preload() {
        this.load.image('bckground', '');
    }
    create() {
        var div = document.getElementById('config');
        div.style.backgroundColor = 'bckground';
    }
}
const $79e4e45715fe0db8$var$config = {
    type: (0, $4b4b77cb78743c42$export$2e2bcd8739ae039).WEBGL,
    title: 'MAIZE',
    description: '',
    parent: 'gCanvas',
    width: 1280,
    height: 720,
    backgroundColor: 'bckground',
    pixelArt: false,
    scene: [],
    scale: {
        mode: (0, $4b4b77cb78743c42$export$2e2bcd8739ae039).Scale.FIT,
        autoCenter: (0, $4b4b77cb78743c42$export$2e2bcd8739ae039).Scale.CENTER_BOTH
    }
};
const $79e4e45715fe0db8$var$game = new (0, $4b4b77cb78743c42$export$2e2bcd8739ae039).Game($79e4e45715fe0db8$var$config);
$79e4e45715fe0db8$var$game.scene.add((0, $c2b0566ac1880872$export$66c061e3f057cec7).PRELOADER, (0, $bfe39d89948ae1b8$export$8ddba6b40106a7ae));
$79e4e45715fe0db8$var$game.scene.start((0, $c2b0566ac1880872$export$66c061e3f057cec7).PRELOADER);


//# sourceMappingURL=Maize.js.map

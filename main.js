class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        vvc
        this.$element.style.display = 'none'
    }

    show() {
        this.$element.style.display = 'block'
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.background = options.cvet
        this.$element.style.borderRadius = '50%'
        let color = prompt('')
        if (color === "red") {
            red.red()
        }else if(color==='yellow'){
            yellow.yellow()
        }
    }
}

const block1 = new Block({
    selector: '#block1',
    razmer: 90,
    cvet: 'red'
})

const block2 = new Block({
    selector: '#block2',
    razmer: 90,
    cvet: 'yellow'
})

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
       
    }
}

const circle = new Circle({
    selector: '.krug',
    razmer: 90,
    cvet: 'green'
})

circle.hide()
circle.show()
block1.hide()
block1.show()
block2.hide()
block2.show()

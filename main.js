const color = prompt('Выьерите цвет')

class Svetofor {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}


class Circle extends Svetofor {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
        this.$element.style.borderRadius = '50%'
        his.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.borderRadius = '50%'
    }
}

if (color === 'красный') {
    const red = new Circle({
        selector: '#red',
        razmer: 90,
        color: 'red'

    })
    red.hide()
    red.show()
} else if (color === 'желтый') {
    const yellow = new Circle({
        selector: '#yellow',
        razmer: 90,
        color: 'yellow'
    })
    yellow.hide()
    yellow.show()

} else if (color === 'зеленый') {
    const green = new Circle({
        selector: '#green',
        razmer: 90,
        color: 'green'
    })
    green.hide()
    green.show()
} else {
    alert('ERROR')
}

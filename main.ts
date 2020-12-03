input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Pitchfork)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("YMCA!")
})
basic.forever(function () {
    basic.showString("HELLO")
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        . . . . .
        . . . . .
        `)
})

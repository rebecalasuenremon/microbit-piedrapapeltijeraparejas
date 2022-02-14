/**
 */
radio.onReceivedNumber(function (receivedNumber) {
    Jugada2 = randint(1, 3)
    if (Jugada2 == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(1500)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        } else {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        }
    } else if (Jugada2 == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1500)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else if (receivedNumber == 1) {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        } else {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        }
    } else if (Jugada2 == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
        basic.pause(1500)
        if (receivedNumber == 1) {
            basic.showIcon(IconNames.Sad)
            radio.sendNumber(4)
        } else if (receivedNumber == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendNumber(5)
        } else {
            basic.showIcon(IconNames.No)
            radio.sendNumber(6)
        }
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    MiJugada = randint(1, 3)
    radio.sendNumber(MiJugada)
    if (MiJugada == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (MiJugada == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # . # #
            # # . # #
            `)
    }
})
let MiJugada = 0
let Jugada2 = 0
radio.setGroup(7)

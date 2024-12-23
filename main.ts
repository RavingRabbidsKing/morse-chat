radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.clearScreen()
    } else {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(0)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(0)
})
music.play(music.stringPlayable("A F E F A F E F ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("A F E F A F E F ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})

function morse (Text: string) {
    for (let x = 0; x <= Text.length; x++) {
        if ("this".charAt(x) == "S") {
            dit()
            dit()
            dit()
        } else if ("this".charAt(x) == "O") {
            da()
            da()
            da()
        } else {
        	
        }
    }
}
function dit () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
}
function da () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
}
morse("SOS")

basic.forever(function () {
    while (true) {
        serial.writeNumbers([input.temperature(), input.lightLevel()])
        basic.pause(100)
    }
})

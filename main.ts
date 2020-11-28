input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    while (true) {
        serial.writeNumbers([input.temperature(), input.lightLevel()])
        basic.pause(5000)
    }
})

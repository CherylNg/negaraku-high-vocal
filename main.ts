// Raja kita, selamat bertakhta
function High_Vocal_L4 () {
    music.playTone(932, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole))
    music.playTone(1397, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Whole))
    music.playTone(1175, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(932, music.beat(BeatFraction.Half))
    music.playTone(1047, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
}
// Rahmat bahagia, Tuhan kurniakan
function High_Vocal_L5 () {
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(1047, music.beat(BeatFraction.Half))
    music.playTone(1109, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Whole))
    music.playTone(1397, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        High_Vocal_L0()
        High_Vocal_L1()
        High_Vocal_L2()
        High_Vocal_L3()
        High_Vocal_L4()
        High_Vocal_L5()
        High_Vocal_L6()
    }
})
// Intro
function High_Vocal_L0 () {
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole) * 1.5)
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    High_Vocal_L0()
    High_Vocal_L1()
    High_Vocal_L2()
    High_Vocal_L3()
    High_Vocal_L4()
    High_Vocal_L5()
    High_Vocal_L6()
})
// Rahmat bahagia, Tuhan kurniakan
function High_Vocal_L3 () {
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(1047, music.beat(BeatFraction.Half))
    music.playTone(1109, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Whole))
    music.playTone(1397, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
}
// Raja kita, selamat bertakhta
function High_Vocal_L6 () {
    music.playTone(932, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole))
    music.playTone(1397, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Whole))
    music.playTone(1175, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(784, music.beat(BeatFraction.Half))
    music.playTone(831, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
}
// Rakyat hidup, bersatu dan maju
function High_Vocal_L2 () {
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(932, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(1109, music.beat(BeatFraction.Whole))
    music.playTone(1397, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(1109, music.beat(BeatFraction.Half))
    music.playTone(1047, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
}
// Negaraku, tanah tumpah darahku
function High_Vocal_L1 () {
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole) * 1.5)
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(1245, music.beat(BeatFraction.Whole))
    music.playTone(1047, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(831, music.beat(BeatFraction.Half))
    music.playTone(932, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
}
radio.setGroup(1)
edubitRgbBit.setPixelColor(0, 0xff0000)
edubitRgbBit.setPixelColor(1, 0x0000ff)
edubitRgbBit.setPixelColor(2, 0xffff00)
edubitRgbBit.setPixelColor(3, 0xffffff)
basic.forever(function () {
    led.plotBarGraph(
    edubitSoundBit.readSoundSensor(),
    750
    )
})

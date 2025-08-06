sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(0)
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    sprites.destroy(respuestaIncorrecta)
    sprites.destroy(respuestaCorrecta)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    sprites.destroy(respuestaCorrecta)
    sprites.destroy(respuestaIncorrecta)
})
let respuestaIncorrecta: Sprite = null
let respuestaCorrecta: Sprite = null
scene.setBackgroundImage(assets.image`Fondo cocina`)
let mySprite = sprites.create(img`
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 e e e e 1 1 1 1 . . 
    . 1 1 e 4 4 f 4 4 f 4 4 e 1 1 . 
    . f e e 4 4 f 4 4 f 4 4 e e f . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 1 1 1 1 1 1 1 1 4 e . . 
    . . 4 d 1 1 1 1 1 1 1 1 d 4 . . 
    . . 4 4 1 1 1 1 1 1 1 1 4 4 . . 
    . . . . 1 f f f f f f 1 . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.showLongText("La receta pide 3/4 de azúcar, pero ya pusiste 2/4. ¿Cuánto falta?", DialogLayout.Bottom)
respuestaCorrecta = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f . f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
respuestaCorrecta.setPosition(33, 44)
respuestaIncorrecta = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
respuestaIncorrecta.setPosition(134, 44)

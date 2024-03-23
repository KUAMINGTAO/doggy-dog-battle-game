scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (DOOR == 0) {
        myCorg.x += -10
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    if (DOOR == 1) {
        myCorg.x += -10
        scene.setBackgroundImage(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (POWER == 1) {
        myCorg.setImage(img`
            ....eee....eee...........
            ....cbbc..cbbc...........
            ....cbbbffbbbc...........
            ....cfbbbbbbfc...........
            ....fbfbbbbfbf...........
            ....ebbbbbbbbe...........
            ....eb5bbbb5be...........
            ....fcb5bb5bcf...........
            .bfbfbcfcfcfbf...........
            .fbf.f222222f............
            .fbffbbbcbbbbf..f........
            .fbfffcfcbbbbfffbfffffff.
            .fbcffffcbbbbfcfbdddddddf
            ..fffbbbcbbbbfffbfffffff.
            ....fcccffcccf..f........
            .....fff..fff............
            `)
        pause(100)
        myCorg.setImage(img`
            . . . . e e e . . . . e e e . . . 
            . . . . c b b c . . c b b c . f . 
            . . . . c b b b f f b b b c f d f 
            . . . . c f b b b b b b f c f d f 
            . . . . f b f b b b b f b f f d f 
            . . . . e b b b b b b b b e f d f 
            . . . . e b 5 b b b b 5 b e f d f 
            . . . . f c b 5 b b 5 b c f f d f 
            . b f b f b c f c f c f b f f d f 
            . f b f . f 2 2 2 2 2 2 f . f d f 
            . f b f f b b b c b b b b f b b b 
            . f b f f f c f c b b b b f f f f 
            . f b c f f f f c b b b b f c f . 
            . . f f f b b b c b b b b f f f . 
            . . . . f c c c f f c c c f . . . 
            . . . . . f f f . . f f f . . . . 
            `)
    }
    if (POWER == 2) {
        myCorg.setImage(img`
            ....eee....eee...........
            ....cddc..cddc...........
            ....cbddffddbc...........
            ....c3bdbddb3c...........
            ....fb3dddd3bf...........
            ....edddddddde...........
            ....edfddddfde...........
            ....fddfddfddf...........
            .bfbf2ddbbddbf...........
            .fbf.f222222f............
            .fbffbbbcbbbbf..f........
            .fbfffcfcbbbbfffbfffffff.
            .fbcffffcbbbbfcfbdddddddf
            ..fffbbbcbbbbfffbfffffff.
            ....fcccffcccf..f........
            .....fff..fff............
            `)
    }
    if (POWER == 0) {
        myCorg.setImage(img`
            ....eee....eee...........
            ....cddc..cddc...........
            ....cbddffddbc...........
            ....c3bdbddb3c...........
            ....fb3dddd3bf...........
            ....edddddddde...........
            ....edfddddfde...........
            ....fddfddfddf...........
            .bfbf2ddbbddbf...........
            .fbf.f222222f............
            .fbffbbbcbbbbf..f........
            .fbfffcfcbbbbfffbfffffff.
            .fbcffffcbbbbfcfbdddddddf
            ..fffbbbcbbbbfffbfffffff.
            ....fcccffcccf..f........
            .....fff..fff............
            `)
    }
    BOSS.follow(myCorg, 0)
    pause(1000)
    BOSS.follow(myCorg, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile19`)
    tiles.placeOnRandomTile(BOSS, assets.tile`myTile18`)
    tiles.placeOnRandomTile(BOSS_POWER, assets.tile`myTile18`)
    tiles.placeOnRandomTile(BOSS_2, assets.tile`myTile18`)
    BOSS_2.sayText("HI ,DOGGY .......DIED.")
    BOSS_2.setImage(img`
        ........ccccc.......
        ......ccfffffc......
        .....cffff1affc.....
        ....cfffffaaffbc....
        ....cfffffffffbbc...
        ....ccaa1afffffbc...
        ....cf333fffbffffc..
        ....cf333fffbbfffc..
        .....cffffaffffffc..
        ......caacffaffbfc..
        .....caacffaaffbbccc
        .....ccccccffffffffc
        ........cccabbafffc.
        .........cabbaaccc..
        ........ccccccc.....
        ........cbbbc.......
        `)
    BOSS_POWER.setImage(img`
        . . . . . . . . c c . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . c c c . . . . . . . . . . 
        . . c a a c . . . . . . . c c . 
        . c a a a c . . . . . . c a a c 
        . c a a c . . . . c c . c a a c 
        . c c c . . . . . c c . . c c . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . c c c a a a a a a c c c . . 
        . c a f f f c c c c f f a a c . 
        c a a f c . . . . . c f f a a c 
        f a a c c . . . . . . c f a a f 
        f c a a a c c . . . . c a a f f 
        . f f c a a a a c . f f f f f f 
        . . . c c c c c c . . . . . . . 
        `)
    BOSS.setImage(img`
        . . . . b b b . . . . b b b . . . 
        . . . . b c c c . . c c c b . f . 
        . . . . b c c c f f c c c b f a f 
        . . . . b f c c c c c c f b f a f 
        . . . . f c f c c c c f c f f a f 
        . . . . b c c c c c c c c b f a f 
        . . . . b c a c c c c a c b f a f 
        . . . . f a c a c c a c a f f a f 
        . c f c f c a f a f a f c f f a f 
        . f c f . f a a a a a a f . f a f 
        . f c f f c c c a c c c c f c c c 
        . f c f f f a f a c c c c f f f f 
        . f c a f f f f a c c c c f a f . 
        . . f f f c c c a c c c c f f f . 
        . . . . f a a a f f a a a f . . . 
        . . . . . f f f . . f f f . . . . 
        `)
    BOSS.follow(BOSS_2, 150)
    BOSS_POWER.follow(BOSS_2, 150)
    BOSS_2.follow(myCorg, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    POWER += 1
    if (POWER == 1) {
        myCorg.setImage(img`
            . . . . e e e . . . . e e e . . . 
            . . . . c b b c . . c b b c . f . 
            . . . . c b b b f f b b b c f d f 
            . . . . c f b b b b b b f c f d f 
            . . . . f b f b b b b f b f f d f 
            . . . . e b b b b b b b b e f d f 
            . . . . e b 5 b b b b 5 b e f d f 
            . . . . f c b 5 b b 5 b c f f d f 
            . b f b f b c f c f c f b f f d f 
            . f b f . f 2 2 2 2 2 2 f . f d f 
            . f b f f b b b c b b b b f b b b 
            . f b f f f c f c b b b b f f f f 
            . f b c f f f f c b b b b f c f . 
            . . f f f b b b c b b b b f f f . 
            . . . . f c c c f f c c c f . . . 
            . . . . . f f f . . f f f . . . . 
            `)
        myCorg.sayText("BATTLE MODE", 500, false)
    }
    if (POWER == 2) {
        myCorg.setImage(img`
            . . . . e e e . . . . e e e . . 
            . . . . c d d c . . c d d c . . 
            . . . . c b d d f f d d b c . . 
            . . . . c 3 b d b d d b 3 c . . 
            . . . . f b 3 d d d d 3 b f . . 
            . . . . e d d d d d d d d e . . 
            . . . . e d f d d d d f d e . . 
            . . . . f d d f d d f d d f . . 
            . b f b f 2 d d b b d d b f . . 
            . f b f . f 2 2 2 2 2 2 f . . . 
            . f b f f b b b c b b b b f . . 
            . f b f f f c f c b f c f f . . 
            . f b c f f f f c b f f f f . . 
            . . f f f b b b c b b b b f . . 
            . . . . f c c c f f c c c f . . 
            . . . . . f f f . . f f f . . . 
            `)
        myCorg.sayText("NORMAL MODE", 500, false)
        POWER = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    ROUND_1 += 0.5
    if (ROUND_1 == 1) {
        BOSS.sayText("DIED DOGGY ,HA")
        BOSS.setImage(img`
            . . . . b b b . . . . b b b . . . 
            . . . . b c c c . . c c c b . f . 
            . . . . b c c c f f c c c b f a f 
            . . . . b f c c c c c c f b f a f 
            . . . . f c f c c c c f c f f a f 
            . . . . b c c c c c c c c b f a f 
            . . . . b c a c c c c a c b f a f 
            . . . . f a c a c c a c a f f a f 
            . c f c f c a f a f a f c f f a f 
            . f c f . f a a a a a a f . f a f 
            . f c f f c c c a c c c c f c c c 
            . f c f f f a f a c c c c f f f f 
            . f c a f f f f a c c c c f a f . 
            . . f f f c c c a c c c c f f f . 
            . . . . f a a a f f a a a f . . . 
            . . . . . f f f . . f f f . . . . 
            `)
        BOSS.follow(myCorg)
        BOSS.follow(myCorg, 100)
        tiles.placeOnRandomTile(BOSS, assets.tile`myTile6`)
        DOOR = 0
        info.startCountdown(30)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    ROUND += 0.5
    if (ROUND == 1) {
        BOSS.sayText("DIED DOGGY ,HA")
        BOSS.setImage(img`
            . . . . b b b . . . . b b b . . . 
            . . . . b c c c . . c c c b . f . 
            . . . . b c c c f f c c c b f a f 
            . . . . b f c c c c c c f b f a f 
            . . . . f c f c c c c f c f f a f 
            . . . . b c c c c c c c c b f a f 
            . . . . b c a c c c c a c b f a f 
            . . . . f a c a c c a c a f f a f 
            . c f c f c a f a f a f c f f a f 
            . f c f . f a a a a a a f . f a f 
            . f c f f c c c a c c c c f c c c 
            . f c f f f a f a c c c c f f f f 
            . f c a f f f f a c c c c f a f . 
            . . f f f c c c a c c c c f f f . 
            . . . . f a a a f f a a a f . . . 
            . . . . . f f f . . f f f . . . . 
            `)
        BOSS.follow(myCorg)
        BOSS.follow(myCorg, 100)
        tiles.placeOnRandomTile(BOSS, assets.tile`myTile4`)
    }
})
info.onCountdownEnd(function () {
    DOOR += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    FOOD_POWER += 1
    if (FOOD_POWER == 1) {
        info.setLife(5)
    }
    if (FOOD_POWER == 2) {
        FOOD_POWER = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    ROUND_1 = 1
    if (ROUND_1 == 1) {
        BOSS.sayText("DIED DOGGY ,HA")
        BOSS.setImage(img`
            . . . . 7 7 7 . . . . 7 7 7 . . . 
            . . . . 7 6 6 6 . . 6 6 6 7 . f . 
            . . . . 7 6 6 6 f f 6 6 6 7 f 8 f 
            . . . . 7 f 6 6 6 6 6 6 f 7 f 8 f 
            . . . . f 6 f 6 6 6 6 f 6 f f 8 f 
            . . . . 7 6 6 6 6 6 6 6 6 7 f 8 f 
            . . . . 7 6 7 6 6 6 6 7 6 7 f 8 f 
            . . . . f 7 6 7 6 6 7 6 7 f f 8 f 
            . 9 f 9 f 6 7 f 7 f 7 f 6 f f 8 f 
            . f 6 f . f 7 7 7 7 7 7 f . f 8 f 
            . f 6 f f 6 6 6 7 6 6 6 6 f 6 6 6 
            . f 6 f f f 7 f 7 6 6 6 6 f f f f 
            . f 6 7 f f f f 7 6 6 6 6 f 7 f . 
            . . f f f 6 6 6 7 6 6 6 6 f f f . 
            . . . . f 8 8 8 f f 8 8 8 f . . . 
            . . . . . f f f . . f f f . . . . 
            `)
        BOSS.follow(myCorg)
        BOSS.follow(myCorg, 100)
        tiles.placeOnRandomTile(BOSS, sprites.castle.rock1)
        DOOR = 0
        info.startCountdown(30)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile10`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    ROUND_1 = 1
    if (ROUND_1 == 1) {
        BOSS.sayText("DIED DOGGY ,HA")
        BOSS.setImage(img`
            . . . . 5 5 5 . . . . 5 5 5 . . . 
            . . . . 5 c c c . . c c c 5 . f . 
            . . . . 5 c c c f f c c c 5 f 2 f 
            . . . . 5 f c c c c c c f 5 f 2 f 
            . . . . f c f c c c c f c f f 2 f 
            . . . . 5 c c c c c c c c 5 f 2 f 
            . . . . 5 c 2 c c c c 2 c 5 f 2 f 
            . . . . f 2 c 2 c c 2 c 2 f f 2 f 
            . c f c f c 2 f 2 f 2 f c f f 2 f 
            . f 4 f . f 5 5 5 5 5 5 f . f 2 f 
            . f 4 f f c c c 5 c c c c f 4 4 4 
            . f 4 f f f 2 f 5 c c c c f f f f 
            . f 4 2 f f f f 5 c c c c f 2 f . 
            . . f f f c c c 5 c c c c f f f . 
            . . . . f 2 2 2 f f 2 2 2 f . . . 
            . . . . . f f f . . f f f . . . . 
            `)
        BOSS.follow(myCorg)
        BOSS.follow(myCorg, 100)
        tiles.placeOnRandomTile(BOSS, assets.tile`myTile10`)
        DOOR = 0
        info.startCountdown(30)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let FOOD_POWER = 0
let DOOR = 0
let BOSS_2: Sprite = null
let BOSS_POWER: Sprite = null
let ROUND_1 = 0
let ROUND = 0
let BOSS: Sprite = null
let PEOPLE: Sprite = null
let HOUSE: Sprite = null
let myCorg: Sprite = null
let POWER = 0
POWER = 0
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level6`)
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("D - - - E F G A ", 120), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("C - - D A G A D ", 120), music.PlaybackMode.InBackground)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.showLongText("PLAY:DOGGY DOY BATTLE GAME", DialogLayout.Bottom)
game.setDialogCursor(img`
    ..........eee....eee
    ..........cddc..cddc
    ..........cbddffddbc
    ..........c3bdbddb3c
    ..........fb3dddd3bf
    ..........edddddddde
    ..........edfddddfde
    ..........fddfddfddf
    .......bfbf2ddbbddbf
    .......fbf.f222222f.
    .......fbffbbbcbbbbf
    .11....fbfffcfcbfcff
    11..1..fbcffffcbffff
    ...1....fffbbbcbbbbf
    11.1.1111.fcccffcccf
    ....1......fff..fff.
    `)
game.setDialogFrame(img`
    ffccaccaaccaaccaacccccff
    fcffcaffcaffcaffcaccffcf
    affffcaffcaffcaffcaffffa
    affffccaaccaaccaaccffffa
    acffcffffffffffffffcffca
    ccacffffffffffffffffccac
    caccffffffffffffffffcafc
    acfaffffffffffffffffaffa
    affaffffffffffffffffafca
    cfacffffffffffffffffccac
    caccffffffffffffffffcafc
    acfaffffffffffffffffaffa
    affaffffffffffffffffafca
    cfacffffffffffffffffccac
    caccffffffffffffffffcafc
    acfaffffffffffffffffaffa
    affaffffffffffffffffafca
    cfacffffffffffffffffccac
    caccffffffffffffffffcacc
    acffcffffffffffffffcffca
    affffccaaccaaccaaccffffa
    affffacffacffacffacffffa
    faffccacffacffacffacffaf
    ffaaaccaaccaaccaaccaaaff
    `)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccfffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccfffffffffffffffffffffffffc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccffffffffffffffffcccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccaaaaaaaaaaccccaacccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccaaaaaaaaaaaaacccaacccccccccccccccccccccccccccccccccaccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccacac
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccccccac
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccaac
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccacaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaacccccccccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccaaaaaaaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaaaaaaaaaaaaccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaacccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccaaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaacccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccaaaaaaaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaacccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccaaaaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaacccccaaaaaa
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaacccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccaaaaaaaaaacccccccccccaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccccaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccaccccccccccccccccccccccaaaaaaaaaaaaaaaaaccccccccaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaccccccccaaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaccccccccccaaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaccccccccccccaaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccaaaaaaaaacccccccccccccccccaaacccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccaaaaaaaaaaaaaccccccccccccccccaaaaaaccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccaaaaaaaaaaaaaaaacccccccccccccccaaaaaaaaacccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaacccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccaaaaaaaaaaaaaaaacccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccaaaaaaaaaaaaaaaaaaaaccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaacccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccaaaaaaaaaaaaaaaaaaaacccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaaaaaccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaaaacccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccaaaaaaaaaaaaaaaaaaaaacccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccacaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccaaccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccaaaaaaaacccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccaaaaaaaaaaccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccaaaaaaaaaaaaccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccaaaaaaaaaaaacccccccccccccaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccaaaaaaaaaaaaccccccccccccccccaaaaaaaaaaaaaaaaaacccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccaaaaaaaaaaaaacccccccccccccccccccccccccccaaaaaaccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccaaaaaaaaaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
game.setDialogTextColor(10)
game.showLongText("ONE DAY,A DOG NAME DOGGY ,BECAUSE I WANT TO GET ", DialogLayout.Bottom)
game.showLongText("THE SUNSHINE DIAMOND ", DialogLayout.Bottom)
game.showLongText("TO DEFEAT ALL BAD GUYS AND BOSS.", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`level4`)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
myCorg = sprites.create(img`
    . . . . e e e . . . . e e e . . 
    . . . . c d d c . . c d d c . . 
    . . . . c b d d f f d d b c . . 
    . . . . c 3 b d b d d b 3 c . . 
    . . . . f b 3 d d d d 3 b f . . 
    . . . . e d d d d d d d d e . . 
    . . . . e d f d d d d f d e . . 
    . . . . f d d f d d f d d f . . 
    . b f b f 2 d d b b d d b f . . 
    . f b f . f 2 2 2 2 2 2 f . . . 
    . f b f f b b b c b b b b f . . 
    . f b f f f c f c b f c f f . . 
    . f b c f f f f c b f f f f . . 
    . . f f f b b b c b b b b f . . 
    . . . . f c c c f f c c c f . . 
    . . . . . f f f . . f f f . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(myCorg)
tiles.placeOnRandomTile(myCorg, sprites.dungeon.collectibleInsignia)
controller.moveSprite(myCorg)
for (let value of tiles.getTilesByType(sprites.dungeon.collectibleRedCrystal)) {
    HOUSE = sprites.create(img`
        ....................e2e22e2e....................
        .................222eee22e2e222.................
        ..............222e22e2e22eee22e222..............
        ...........e22e22eeee2e22e2eeee22e22e...........
        ........eeee22e22e22e2e22e2e22e22e22eeee........
        .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
        ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
        4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
        6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
        46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
        46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
        4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
        6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
        4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
        6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
        46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
        466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
        4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
        6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
        46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
        46622e22e22e22eeecc6666666666cceee22e22e22e22664
        4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
        6c622e22eeecc66666cc64444446cc66666cceee22e226c6
        46622e22cc66666cc64444444444446cc66666cc22e22664
        46622cc6666ccc64444444444444444446ccc6666cc22664
        4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
        cccccccc6666666cb44444444444444bc6666666cccccccc
        64444444444446c444444444444444444c64444444444446
        66cb444444444cb411111111111111114bc444444444bc66
        666cccccccccccd166666666666666661dccccccccccc666
        6666444444444c116eeeeeeeeeeeeee611c4444444446666
        666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
        666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
        666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
        666edffdffde4c66f4effffffffff4ee66c4edffdffde666
        666edccdccde4c66f4effffffffffeee66c4edccdccde666
        666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
        666edffdffde4c66e4e44e44e44e44ee66c4edffdffde666
        666edccdccde4c66e4e44e44e44e44ee66c4edccdccde666
        6666666666664c66e4e44e44e44feeee66c4666666666666
        6666444444444c66e4e44e44e44ffffe66c4444444446666
        66664eee4eee4c66f4e44e44e44f44fe66c4eee4eee46666
        66664eee4eee4c66f4e44e44e44effee66c4eee4eee46666
        6666644444444c66f4e44e44e44e44ee66c4444444466666
        6666664eee444c66f4e44e44e44e44ee66c444eee4666666
        6666666ccc666c66e4e44e44e44e44ee66c666ccc6666666
        `, SpriteKind.Projectile)
    tiles.placeOnTile(HOUSE, value)
}
for (let value of tiles.getTilesByType(sprites.castle.tileGrass2)) {
    PEOPLE = sprites.create(img`
        . . . . e e e . . . . e e e . . 
        . . . . c d d c . . c d d c . . 
        . . . . c b d d f f d d b c . . 
        . . . . c 3 b d b d d b 3 c . . 
        . . . . f b 3 d d d d 3 b f . . 
        . . . . e d d d d d d d d e . . 
        . . . . e d f d d d d f d e . . 
        . . . . f d d f d d f d d f . . 
        . b f b f 2 d d b b d d b f . . 
        . f d f . f 2 2 2 2 2 2 f . . . 
        . f d f f 5 5 5 c 5 5 5 5 f . . 
        . f d f f f d f c 5 f d f f . . 
        . f d d f f f f c 5 f f f f . . 
        . . f f f 6 6 6 c 6 6 6 6 f . . 
        . . . . f 6 6 6 f f 6 6 6 f . . 
        . . . . . f f f . . f f f . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(PEOPLE, value)
}
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    PEOPLE = sprites.create(img`
        ....eee....eee......
        ....cd545545dc......
        ....c54544545cffff..
        ....c54544545c8999f.
        ....545455454599998f
        ....eddddddddefeff88
        ....edfddddfdefef.ff
        ....fddfddfddffef...
        .bfbf2ddbbddbffef...
        .fdf.f222222f.fef...
        .fdff111dd111ffef...
        .fdfffdf11111fff....
        .fddffff11111fdf....
        ..fffbbbbbbbbfff....
        ....fdddffdddf......
        .....fff..fff.......
        `, SpriteKind.Projectile)
    tiles.placeOnTile(PEOPLE, value)
}
PEOPLE.sayText("DON'T GO IN THE FOREST")
BOSS = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
ROUND = 0
ROUND_1 = 0
BOSS_POWER = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(BOSS_POWER, sprites.castle.tileDarkGrass3)
BOSS_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(BOSS_2, sprites.castle.tileDarkGrass3)
BOSS_POWER.follow(BOSS_2)

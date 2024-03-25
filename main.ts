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
        music.play(music.createSong(hex`0078000408020304001c00100500640000041e000004000000000000000000000000000a040004060000000400012405001c000f0a006400f4010a0000040000000000000000000000000000000002060000000400012a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000b00000001000600020406080a`), music.PlaybackMode.InBackground)
        myCorg.setImage(img`
            ....eee....eee..55.......
            ....cbbc..cbbc..55.......
            ....cbbbffbbbc..555......
            ....cfbbbbbbfc...555.....
            ....fbfbbbbfbf...5555....
            ....ebbbbbbbbe....55555..
            ....eb5bbbb5be.....5555..
            ....fcb5bb5bcf.......555.
            .bfbfbcfcfcfbf.......555.
            .fbf.f222222f.......5555.
            .fbffbbbcbbbbf..f.5555555
            .fbfffcfcbbbbfffbfffffff5
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
        music.play(music.createSong(hex`0078000408020205001c000f0a006400f4010a00000400000000000000000000000000000000020b000000040006191d2024272a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001100000001000c000102030405060708090a0b`), music.PlaybackMode.InBackground)
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
    BOSS_2.follow(myCorg, 0)
    BOSS3.follow(myCorg, 0)
    pause(1000)
    BOSS.follow(myCorg, 50)
    BOSS_2.follow(myCorg, 50)
    BOSS3.follow(myCorg, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    tiles.placeOnRandomTile(myCorg, assets.tile`myTile19`)
    tiles.placeOnRandomTile(BOSS, assets.tile`myTile18`)
    tiles.placeOnRandomTile(BOSS_POWER, assets.tile`myTile18`)
    tiles.placeOnRandomTile(BOSS_2, assets.tile`myTile18`)
    music.setVolume(666)
    music.play(music.stringPlayable("F G A B G F E D ", 500), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("F G A B - G - E ", 500), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("F D A D A G D E ", 500), music.PlaybackMode.InBackground)
    game.splash("LAST BOSS :DOG BLACK AND DRAGON BLACK")
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
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(BOSS, assets.tile`myTile24`)
    tiles.placeOnRandomTile(BOSS, assets.tile`myTile24`)
    tiles.placeOnRandomTile(BOSS_2, assets.tile`myTile24`)
    tiles.placeOnRandomTile(BOSS_2, assets.tile`myTile24`)
    tiles.placeOnRandomTile(BOSS3, assets.tile`myTile24`)
    tiles.placeOnRandomTile(BOSS3, assets.tile`myTile24`)
    tiles.placeOnRandomTile(BOSS_POWER, assets.tile`myTile24`)
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
        music.play(music.createSong(hex`0078000408020601001c000f05001202c102c20100040500280000006400280003140006020004060000000400011905001c000f0a006400f4010a0000040000000000000000000000000000000002060000000400012406001c00010a006400f401640000040000000000000000000000000000000002060000000400012007001c00020a006400f401640000040000000000000000000000000000000003060000000400012a08001c000e050046006603320000040a002d0000006400140001320002010002060000000400012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600000001000102`), music.PlaybackMode.UntilDone)
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
        music.play(music.createSong(hex`0078000408020601001c000f05001202c102c20100040500280000006400280003140006020004060000000400011905001c000f0a006400f4010a0000040000000000000000000000000000000002060000000400012406001c00010a006400f401640000040000000000000000000000000000000002060000000400012007001c00020a006400f401640000040000000000000000000000000000000003060000000400012a08001c000e050046006603320000040a002d0000006400140001320002010002060000000400012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600000001000102`), music.PlaybackMode.UntilDone)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.splash("BOSS 1: FOSERT BLACK DOG")
    ROUND_1 += 0.5
    if (ROUND_1 == 1) {
        music.play(music.stringPlayable("F G A B G F E D ", 500), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("F G A B - G - E ", 500), music.PlaybackMode.InBackground)
        music.play(music.stringPlayable("F D A D A G D E ", 225), music.PlaybackMode.InBackground)
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
    music.play(music.stringPlayable("F G A B G F E D ", 500), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("F G A B - G - E ", 500), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("F D A D A G D E ", 225), music.PlaybackMode.InBackground)
    game.splash("BOSS 2:FOSERT KING DOG")
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
    music.play(music.stringPlayable("F G A B G F E D ", 500), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("F G A B - G - E ", 500), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("F D A D A G D E ", 225), music.PlaybackMode.InBackground)
    game.splash("BOSS 3 :LAVA DOG")
    ROUND_1 = 1
    if (ROUND_1 == 1) {
        BOSS3.setImage(img`
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
        BOSS3.sayText("DIED DOGGY ,HA")
        BOSS3.follow(myCorg)
        BOSS3.follow(myCorg, 100)
        tiles.placeOnRandomTile(BOSS3, assets.tile`myTile10`)
        DOOR = 0
        info.startCountdown(30)
        music.setVolume(0)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    SOUND += 1
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ...cbd111111111111dbc...
        .....cccccccccccccc.....
        ........................
        ........................
        `)
    game.showLongText("HAPPY YOUR GET THE DIAMOND AND YOU SURVIVE IT ,THE FOSERT OF THE DIAMOND", DialogLayout.Bottom)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let FOOD_POWER = 0
let DOOR = 0
let BOSS3: Sprite = null
let BOSS_2: Sprite = null
let BOSS_POWER: Sprite = null
let ROUND_1 = 0
let ROUND = 0
let BOSS: Sprite = null
let PEOPLE: Sprite = null
let HOUSE: Sprite = null
let myCorg: Sprite = null
let POWER = 0
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("D - - - E F G A ", 120), music.PlaybackMode.InBackground)
music.play(music.stringPlayable("C - - D A G A D ", 120), music.PlaybackMode.InBackground)
let SOUND = 0
POWER = 0
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level6`)
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
game.showLongText("CHAPTER 1: THE BOSSES", DialogLayout.Bottom)
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
BOSS3 = sprites.create(img`
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
forever(function () {
    if (SOUND == 0) {
        for (let index = 0; index < 5; index++) {
            music.play(music.createSong(hex`0078000408020901001c000f05001202c102c20100040500280000006400280003140006020004060000000400012a02001c000c960064006d019001000478002c010000640032000000000a060005360000000400012a08000c00012910001400012518001c00012224002800012928002c00011d30003400012034003800012938003c00012903001c0001dc00690000045e0100040000000000000000000005640001040003260000000400012a20002400031d222928002c00031d222930003400031d222938003c00031d222904001c00100500640000041e000004000000000000000000000000000a040004060000000400012a05001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400012a08000c00012910001400012518001c00012206001c00010a006400f4016400000400000000000000000000000000000000020c0000000400012a24002800011d07001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012a08000c00012910001400012518001c00012220002400012908001c000e050046006603320000040a002d00000064001400013200020100020c0000000400012a2c003000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800430000000100010a080009000109100011000107180019000105200021000106240025000200072800290001002c002d00010630003100010234003500010b380039000107`), music.PlaybackMode.UntilDone)
        }
        music.play(music.createSong(hex`0078000408020602001c000c960064006d019001000478002c010000640032000000000a060005240000000400012708000c00012c10001400012918001c00011d28002c00012038003c00012703001c0001dc00690000045e0100040000000000000000000005640001040003300000000400012a08000c00012910001400012518001c00012220002400012728002c00011d30003400012738003c00012004001c00100500640000041e000004000000000000000000000000000a0400041e0018001c00012220002400012728002c00011d30003400012738003c00012005001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400012a08000c00012910001400012518001c00012220002400012728002c00011d30003400012738003c00012006001c00010a006400f4016400000400000000000000000000000000000000020c001c002000011d2c003000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003e000000010002040a08000900020009100011000202071800190001052000210001082800290001023000310001083800390001043c003d000600020406080a`), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 3; index++) {
            music.play(music.createSong(hex`0078000408020901001c000f05001202c102c20100040500280000006400280003140006020004060000000400012a02001c000c960064006d019001000478002c010000640032000000000a060005360000000400012a08000c00012910001400012518001c00012224002800012928002c00011d30003400012034003800012938003c00012903001c0001dc00690000045e0100040000000000000000000005640001040003260000000400012a20002400031d222928002c00031d222930003400031d222938003c00031d222904001c00100500640000041e000004000000000000000000000000000a040004060000000400012a05001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400012a08000c00012910001400012518001c00012206001c00010a006400f4016400000400000000000000000000000000000000020c0000000400012a24002800011d07001c00020a006400f4016400000400000000000000000000000000000000031e0000000400012a08000c00012910001400012518001c00012220002400012908001c000e050046006603320000040a002d00000064001400013200020100020c0000000400012a2c003000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800430000000100010a080009000109100011000107180019000105200021000106240025000200072800290001002c002d00010630003100010234003500010b380039000107`), music.PlaybackMode.UntilDone)
        }
        music.play(music.createSong(hex`0078000408020602001c000c960064006d019001000478002c010000640032000000000a060005240000000400012708000c00012c10001400012918001c00011d28002c00012038003c00012703001c0001dc00690000045e01000400000000000000000000056400010400030b003c00400006191d2024272a04001c00100500640000041e000004000000000000000000000000000a0400041e0018001c00012220002400012728002c00011d30003400012738003c00012005001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400012a08000c00012910001400012518001c00012220002400012728002c00011d30003400012738003c00012006001c00010a006400f40164000004000000000000000000000000000000000254000000040004191b2a2c08000c0004191b2a2c1000140004191b2a2c18001c0004191b2a2c1c002000011d2000240004191b2a2c28002c0004191b2a2c2c00300001203000340004191b2a2c38003c0004191b2a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b3000000010002040a040005000c000102030405060708090a0b080009000200090c000d000c000102030405060708090a0b10001100020207140015000c000102030405060708090a0b1800190001051c001d000b0001030405060708090a0b200021000108240025000c000102030405060708090a0b2800290001022c002d000b0001020305060708090a0b300031000108340035000c000102030405060708090a0b3800390001043c003d000600020406080a`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (SOUND == 1) {
        music.setVolume(13)
        for (let index = 0; index < 5; index++) {
            music.play(music.createSong(hex`0078000408020502001c000c960064006d019001000478002c010000640032000000000a0600052c000400080006191d2024272a0c00100006191d2024272a1400180006191d2024272a1c00200006191d2024272a03001c0001dc00690000045e0100040000000000000000000005640001040003290000000400012708000c00012410001400012018001c0001192c0030000c191b1d1e2022242527292a2c04001c00100500640000041e000004000000000000000000000000000a040004f80000000400061b1e2225292c040008000c191b1d1e2022242527292a2c08000c00061b1e2225292c0c0010000c191b1d1e2022242527292a2c10001400061b1e2225292c140018000c191b1d1e2022242527292a2c18001c00061b1e2225292c1c0020000c191b1d1e2022242527292a2c200024000c191b1d1e2022242527292a2c240028000c191b1d1e2022242527292a2c28002c000c191b1d1e2022242527292a2c2c0030000c191b1d1e2022242527292a2c300034000c191b1d1e2022242527292a2c340038000c191b1d1e2022242527292a2c38003c000c191b1d1e2022242527292a2c3c0040000c191b1d1e2022242527292a2c05001c000f0a006400f4010a00000400000000000000000000000000000000025500040008000c191b1d1e2022242527292a2c0c0010000c191b1d1e2022242527292a2c140018000c191b1d1e2022242527292a2c1c0020000c191b1d1e2022242527292a2c240028000c191b1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004000000001000b0001020304050607090a0b080009000b0001020304050708090a0b100011000b0001020305060708090a0b180019000b0102030405060708090a0b`), music.PlaybackMode.UntilDone)
        }
        music.play(music.createSong(hex`0078000408010602001c000c960064006d019001000478002c010000640032000000000a060005180000000400012708000c00012c10001400012918001c00011d03001c0001dc00690000045e0100040000000000000000000005640001040003180000000400012a08000c00012910001400012518001c00012204001c00100500640000041e000004000000000000000000000000000a0400048800000004000c191b1d1e2022242527292a2c040008000c191b1d1e2022242527292a2c08000c000c191b1d1e2022242527292a2c0c0010000c191b1d1e2022242527292a2c100014000c191b1d1e2022242527292a2c140018000c191b1d1e2022242527292a2c18001c000c191b1d1e2022242527292a2c1c0020000c191b1d1e2022242527292a2c05001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400012a08000c00012910001400012518001c00012206001c00010a006400f40164000004000000000000000000000000000000000206001c002000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001b000000010002040a0800090002000910001100020207180019000105`), music.PlaybackMode.UntilDone)
        for (let index = 0; index < 5; index++) {
            music.play(music.createSong(hex`0078000408020502001c000c960064006d019001000478002c010000640032000000000a0600052c000400080006191d2024272a0c00100006191d2024272a1400180006191d2024272a1c00200006191d2024272a03001c0001dc00690000045e0100040000000000000000000005640001040003290000000400012708000c00012410001400012018001c0001192c0030000c191b1d1e2022242527292a2c04001c00100500640000041e000004000000000000000000000000000a040004f80000000400061b1e2225292c040008000c191b1d1e2022242527292a2c08000c00061b1e2225292c0c0010000c191b1d1e2022242527292a2c10001400061b1e2225292c140018000c191b1d1e2022242527292a2c18001c00061b1e2225292c1c0020000c191b1d1e2022242527292a2c200024000c191b1d1e2022242527292a2c240028000c191b1d1e2022242527292a2c28002c000c191b1d1e2022242527292a2c2c0030000c191b1d1e2022242527292a2c300034000c191b1d1e2022242527292a2c340038000c191b1d1e2022242527292a2c38003c000c191b1d1e2022242527292a2c3c0040000c191b1d1e2022242527292a2c05001c000f0a006400f4010a00000400000000000000000000000000000000025500040008000c191b1d1e2022242527292a2c0c0010000c191b1d1e2022242527292a2c140018000c191b1d1e2022242527292a2c1c0020000c191b1d1e2022242527292a2c240028000c191b1d1e2022242527292a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8004000000001000b0001020304050607090a0b080009000b0001020304050708090a0b100011000b0001020305060708090a0b180019000b0102030405060708090a0b`), music.PlaybackMode.UntilDone)
        }
        music.play(music.createSong(hex`0078000408020602001c000c960064006d019001000478002c010000640032000000000a060005240000000400012708000c00012c10001400012918001c00011d28002c00012038003c00012703001c0001dc00690000045e01000400000000000000000000056400010400030b003c00400006191d2024272a04001c00100500640000041e000004000000000000000000000000000a0400041001000004000c191b1d1e2022242527292a2c040008000c191b1d1e2022242527292a2c08000c000c191b1d1e2022242527292a2c0c0010000c191b1d1e2022242527292a2c100014000c191b1d1e2022242527292a2c140018000c191b1d1e2022242527292a2c18001c000c191b1d1e2022242527292a2c1c0020000c191b1d1e2022242527292a2c200024000c191b1d1e2022242527292a2c240028000c191b1d1e2022242527292a2c28002c000c191b1d1e2022242527292a2c2c0030000c191b1d1e2022242527292a2c300034000c191b1d1e2022242527292a2c340038000c191b1d1e2022242527292a2c38003c000c191b1d1e2022242527292a2c3c0040000c191b1d1e2022242527292a2c05001c000f0a006400f4010a0000040000000000000000000000000000000002300000000400012a08000c00012910001400012518001c00012220002400012728002c00011d30003400012738003c00012006001c00010a006400f40164000004000000000000000000000000000000000254000000040004191b2a2c08000c0004191b2a2c1000140004191b2a2c18001c0004191b2a2c1c002000011d2000240004191b2a2c28002c0004191b2a2c2c00300001203000340004191b2a2c38003c0004191b2a2c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800b3000000010002040a040005000c000102030405060708090a0b080009000200090c000d000c000102030405060708090a0b10001100020207140015000c000102030405060708090a0b1800190001051c001d000b0001030405060708090a0b200021000108240025000c000102030405060708090a0b2800290001022c002d000b0001020305060708090a0b300031000108340035000c000102030405060708090a0b3800390001043c003d000600020406080a`), music.PlaybackMode.UntilDone)
    }
})

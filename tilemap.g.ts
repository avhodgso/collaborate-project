// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020201030303010101010103030303030402010301030101010101030101010102020103010303030303010301010101020201030103010101010103010101010202010301030101010101030303030302020103010301010101010103030101020201030103010101010101030103010202010301030303030303030301030102020103010101010101010101010301020201030101010103010101010103010202010301010101030101010101030102020103010101010301010101010301020201030303030303030303030303030502020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . 2 2 2 2 2 . . . . . . 
2 2 . 2 . 2 2 2 2 2 . 2 2 2 2 2 
2 2 . 2 . . . . . 2 . 2 2 2 2 2 
2 2 . 2 . 2 2 2 2 2 . 2 2 2 2 2 
2 2 . 2 . 2 2 2 2 2 . . . . . 2 
2 2 . 2 . 2 2 2 2 2 2 . . 2 2 2 
2 2 . 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 2 . 2 . . . . . . . . 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 2 . 2 2 2 2 . 2 2 2 2 2 . 2 2 
2 2 . 2 2 2 2 . 2 2 2 2 2 . 2 2 
2 2 . 2 2 2 2 . 2 2 2 2 2 . 2 2 
2 2 . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

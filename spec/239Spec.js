var gameOfThrees = require('../src/239');

describe("Game of Threes", function() {
    it("deve retornar um array com os números e operações", function() {
        expect(gameOfThrees(100)).toEqual([
            [100, -1],
            [33, 0],
            [11, 1],
            [4, -1],
            1
        ]);

        expect(gameOfThrees(68689)).toEqual([
            [68689, -1],
            [22896, 0],
            [7632, 0],
            [2544, 0],
            [848, 1],
            [283, -1],
            [94, -1],
            [31, -1],
            [10, -1],
            [3, 0],
            1
        ]);

        expect(gameOfThrees(31337357)).toEqual([
            [31337357, 1],
            [10445786, 1],
            [3481929, 0],
            [1160643, 0],
            [386881, -1],
            [128960, 1],
            [42987, 0],
            [14329, -1],
            [4776, 0],
            [1592, 1],
            [531, 0],
            [177, 0],
            [59, 1],
            [20, 1],
            [7, -1],
            [2, 1],
            1
        ]);
    });
});

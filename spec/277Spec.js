var simplify = require('../src/277');

describe("Simplify", function() {
    it("deve retornar uma fração simplificada", function() {
        expect(simplify([4, 8])).toEqual([1, 2]);
        expect(simplify([1536, 78360])).toEqual([64, 3265]);
        expect(simplify([51478, 5536])).toEqual([25739, 2768]);
        expect(simplify([46410, 119340])).toEqual([7, 18]);
        expect(simplify([7673, 4729])).toEqual([7673, 4729]);
        expect(simplify([4096, 1024])).toEqual([4, 1]);
    });
});

var ordemAlfabetica = require('../src/228');

describe("Ordem Alfabética", function() {
    it("deve informar se as letras de uma palavra encontram-se em ordem alfabética", function() {
        expect(ordemAlfabetica("b")).toBe(true);
        expect(ordemAlfabetica("almost")).toBe(true); // "quase"
        expect(ordemAlfabetica("billowy")).toBe(true); // "revolto"
        expect(ordemAlfabetica("biopsy")).toBe(true); // "biópsia"
        expect(ordemAlfabetica("chinos")).toBe(true); // "calças"
        expect(ordemAlfabetica("chintz")).toBe(true); // "tipo de tecido"
        expect(ordemAlfabetica("bijou")).toBe(true); // "bijuteria"
        expect(ordemAlfabetica("abhors")).toBe(true); // "aborrece"
        expect(ordemAlfabetica("begins")).toBe(true); // "começa"
        expect(ordemAlfabetica("chimps")).toBe(true); // "chimpanzés"
        expect(ordemAlfabetica("cereal")).toBe(false); // "cereal"
        expect(ordemAlfabetica("defaced")).toBe(false); // "desfigurado"
        expect(ordemAlfabetica("sponged")).toBe(false); // "esponjado"
        expect(ordemAlfabetica("fiddle")).toBe(false); // "violino"
        expect(ordemAlfabetica("wronged")).toBe(false); // "injustiçado"
    })
})

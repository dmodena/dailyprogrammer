var inteirosCompativeis = require('../src/210');

describe("Inteiros Compatíveis", function() {
  it("deve retornar a compatibilidade dos inteiros entre 0 e 1", function() {
    expect(inteirosCompativeis(0, 255)).toBe(0);
    expect(inteirosCompativeis(1, 1)).toBe(1);
    expect(inteirosCompativeis(1, 2)).toBe(0.75);
    expect(inteirosCompativeis(92, 167)).toBe(0.125);
    expect(inteirosCompativeis(53, 110)).toBe(0.375);
    expect(inteirosCompativeis(119, 138)).toBe(0.125);
  })
})

var desvioPadrao = require('../src/214');

describe("Desvio Padrão", function() {
  it("deve retornar o desvio padrão de um conjunto de números", function() {
    expect(desvioPadrao([5, 6, 11, 13, 19, 20, 25, 26, 28, 37])).toBeCloseTo(9.777);
    expect(desvioPadrao([37, 81, 86, 91, 97, 108, 109, 112, 112, 114, 115, 117, 121, 123, 141])).toBeCloseTo(23.290);
    expect(desvioPadrao([2.59, 2.55, 2.64, 2.61, 2.6, 2.5, 2.62, 2.63, 2.57, 2.64])).toBeCloseTo(0.042);
    expect(desvioPadrao([3, 4, 2, 1])).toBeCloseTo(1.118);
  })
})

import Konva from "konva";

export function gridInitializer(camada) {
    // Linhas Verticais
    for (let x = 0; x < 3000; x += 50) {
        const linha = new Konva.Line({
            points: [x, 0, x, 3000],
            stroke: 'rgba(0, 0, 0, 0.48)',
            strokeWidth: 1
        });
        camada.add(linha);
    }

    // Linhas Horizontais
    for (let y = 0; y < 3000; y += 50) {
        const linha = new Konva.Line({
            points: [0, y, 3000, y],
            stroke: 'rgba(0, 0, 0, 0.48)',
            strokeWidth: 1
        });
        camada.add(linha);
    }
}
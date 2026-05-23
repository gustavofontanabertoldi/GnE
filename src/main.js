import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'tabuleiro',
  width: window.innerWidth,
  height: window.innerHeight,
  draggable: true
});

const camadaMundo = new Konva.Layer();
stage.add(camadaMundo);

for(let x = 0; x < 3000; x += 50){
  const linha = new Konva.Line({
  points: [x, 0, x, 3000],
  stroke: 'rgba(0, 0, 0, 0.08)',
  strokeWidth: 1
  })
  camadaMundo.add(linha)
};

for(let y = 0; y < 3000; y += 50){
  const linha = new Konva.Line({
  points: [0, y, 3000, y],
  stroke: 'rgba(0, 0, 0, 0.08)',
  strokeWidth: 1
  })
  camadaMundo.add(linha)
};

camadaMundo.draw()
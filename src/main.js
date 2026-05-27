import Konva from 'konva';
import {gridInitializer} from './modules/grid.js'
import { cameraInitializer } from './modules/camera.js';
import {token_adm, map_adm} from './modules/input.js'

const stage = new Konva.Stage({
  container: 'tabuleiro',
  width: window.innerWidth,
  height: window.innerHeight,
  draggable: true
});
cameraInitializer(stage)

const low_layer = new Konva.Layer(); // Camada mais em baixo
const middle_layer = new Konva.Layer(); // camada do meio
const upper_layer = new Konva.Layer(); // camada superior

stage.add(low_layer);
stage.add(middle_layer);
stage.add(upper_layer);

map_adm(low_layer);
gridInitializer(middle_layer);
token_adm(upper_layer);

low_layer.draw();
middle_layer.draw();
upper_layer.draw();
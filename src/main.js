import Konva from 'konva';
import {gridInitializer} from './modules/grid.js'
import { cameraInitializer } from './modules/camera.js';
import {add_token} from './modules/input.js'

const stage = new Konva.Stage({
  container: 'tabuleiro',
  width: window.innerWidth,
  height: window.innerHeight,
  draggable: true
});
cameraInitializer(stage)

const camadaMundo = new Konva.Layer();
stage.add(camadaMundo);

gridInitializer(camadaMundo)
add_token(camadaMundo)
camadaMundo.draw()
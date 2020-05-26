import { Injectable } from '@angular/core';
import * as Phaser from 'phaser';
import { MainScene } from '../phaser/main.scene';

@Injectable({ providedIn: 'root' })
export class GameInstanceService {

  public gameInstance: any;
  score = 0;
  level = 1;
  levelChangeScore = 1000;
  currentActiveTileTypes = 4;

  constructor() {
  }

  init() {
    if (!this.gameInstance) {
      this.gameInstance = new Phaser.Game({
        width: window.innerWidth,
        height: window.innerHeight,
        type: Phaser.AUTO,
        scale: {
          mode: Phaser.Scale.RESIZE,
          autoCenter: Phaser.Scale.CENTER_BOTH
        },
        parent: 'game-main',
        dom: {
          createContainer: true
        },
        scene: [MainScene],
        fps: {
          forceSetTimeOut: true
        }
      });
      this.gameInstance.gameInstanceService = this;
    }
  }

  restart() {
    this.score = 0;
    this.level = 1;
    this.currentActiveTileTypes = 4;
    const game = this.gameInstance as Phaser.Game;
    game.scene.getScene(MainScene.KEY).scene.restart();
  }

}
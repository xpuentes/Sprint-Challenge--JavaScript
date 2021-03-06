// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerRefactor {
  constructor(cuboidMakerAttr){
    this.length = cuboidMakerAttr.length;
    this.width = cuboidMakerAttr.width;
    this.height = cuboidMakerAttr.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboidRefactor = new CuboidMakerRefactor({
  length: 4,
  width: 5,
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidRefactor.volume()); // 100
console.log(cuboidRefactor.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your
// volume and surface area.

class CubeMaker extends CuboidMakerRefactor {
  constructor(cubeMakerAttr){
    super(cubeMakerAttr);
  }
  cubeVolume() {
    return Math.pow(this.length, 3);
  }
  cubeSurfaceArea() {
    return 6 * (Math.pow(this.length, 2));
  }
}

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4
})

console.log(cube.cubeVolume()); // 64
console.log(cube.cubeSurfaceArea()); // 96

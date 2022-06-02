const { 
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  MouseConstraint,
  Mouse 
} = Matter;

// Reference to 'Random Shapes':
const width = 800;
const height = 600;

// creating a new Engine
const engine = Engine.create();

// access to world:
const { world } = engine;

// Showing some content on the screen:
// wireframes: false (give solid colors to the shapes).
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);
// moving the shapes by clicking:
World.add(world, MouseConstraint.create(engine, {
  mouse: Mouse.create(render.canvas)
}))

// Walls configuration. Rectangle: the first 2 numbers represents the position of the shape in the world (from the top-left to the center).  The last 2 represents how wide and tall it must appear.
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
];
// Adding the 4 walls:
World.add(world, walls);

// Random Shapes: customize the numbers of shapes, the size format, and the colors.
for (let i = 0; i < 50; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world, 
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 60)
    )
  } else {
    World.add(
      world, 
      Bodies.circle(Math.random() * width, Math.random() * height, 30, {
        render: {
          fillStyle: 'green'
        }
      })
    );
  } 
};

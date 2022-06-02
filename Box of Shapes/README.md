# Box of Shapes

## GENERAL IDEA

- world: contains all the different 'things' or 'shapes' in our matter app.
- engine: transition from a current state of our entire world or all the shapes. Object that reads in the current state of the world from the world object, then calculates changes in positions of all the different shapes.
- runner: gets the engine and the world to work together. Runs about 60 times per second. Coordinate updates between the engine and the world
- render: whenever the engine processes an update, Render will take a look at all the different shapes, and show them on the screen.
- body: reference to the entire collection of all the different shapes.

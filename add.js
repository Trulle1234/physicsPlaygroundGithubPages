import { Bodies, Composite} from "/node_modules/matter-js/build/matter.js";
import { objects, engine } from "simulate.js";

export function addRect(x, y, width, height, density, frictionAir, friction, frictionStatic, restitution) {
    var object = Bodies.rectangle(x, y, width, height, {
          density: density,
          frictionAir: frictionAir,
          friction: friction,
          frictionStatic: frictionStatic,
          restitution: restitution
        });
    objects.push(object);
    Composite.add(engine.world, object);
}
export function addPoly(x, y, sides, diameter, density, frictionAir, friction, frictionStatic, restitution) {
    const initialAngle = (sides === 3) ? Math.PI / 2: 0;
    const scaleFix = (sides === 3) ? 1 / Math.sin(Math.PI / 3): 1;
    var object = Bodies.polygon(x, y, sides, (diameter / 2) * scaleFix, {          
          density: density,
          frictionAir: frictionAir,
          friction: friction,
          frictionStatic: frictionStatic,
          restitution: restitution,
          angle: initialAngle
        });
    objects.push(object);
    Composite.add(engine.world, object);
} 
export function addCircle(x, y, diameter, density, frictionAir, friction, frictionStatic, restitution) {
    var object = Bodies.circle(x, y, diameter / 2, {
          density: density,
          frictionAir: frictionAir,
          friction: friction,
          frictionStatic: frictionStatic,
          restitution: restitution
        });
    objects.push(object);
    Composite.add(engine.world, object);
}
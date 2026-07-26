/**
 * Tiny shared store for normalized scroll velocity + direction.
 * Motion components subscribe to translate raw scroll energy into
 * skew, blur, and directional "forward travel" cues.
 */
type Listener = (velocity: number, direction: number) => void;

let velocity = 0;
let direction = 1;
const listeners = new Set<Listener>();

export function setScrollVelocity(v: number, dir: number) {
  velocity = v;
  direction = dir;
  listeners.forEach((fn) => fn(velocity, direction));
}

export function getScrollVelocity() {
  return { velocity, direction };
}

export function onScrollVelocity(fn: Listener) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenisInstance(next: Lenis | null) {
  instance = next;
}

export function getLenisInstance() {
  return instance;
}

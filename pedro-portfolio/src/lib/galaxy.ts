export interface GalaxyNode {
  index: number;
  angle: number;   // radians
  orbitR: number;  // px
  speed: number;   // deg/s
}

export interface GalaxyState {
  nodes: GalaxyNode[];
  selectedIndex: number;
  paused: boolean;
}

/**
 * Advance all node angles by `dt` seconds.
 * The selected node is held in place; its orbit radius lerps toward 0.
 */
export function tickGalaxy(state: GalaxyState, dt: number): GalaxyState {
  const nodes = state.nodes.map((n, i) => {
    if (i === state.selectedIndex) {
      return { ...n, orbitR: n.orbitR + (0 - n.orbitR) * Math.min(1, dt * 8) };
    }
    const da = ((n.speed * Math.PI) / 180) * dt;
    return { ...n, angle: n.angle + da };
  });
  return { ...state, nodes };
}

/**
 * Convert polar coords (center + orbit) to absolute x/y offset
 * so the element can be positioned with transform: translate(x, y).
 */
export function nodePosition(
  cx: number,
  cy: number,
  angle: number,
  orbitR: number,
  nodeSize: number
): { x: number; y: number } {
  return {
    x: cx + Math.cos(angle) * orbitR - nodeSize / 2,
    y: cy + Math.sin(angle) * orbitR - nodeSize / 2,
  };
}

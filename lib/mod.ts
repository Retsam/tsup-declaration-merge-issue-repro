// This is meant for declaration merging
export interface EventMap {}

export function addListener<E extends keyof EventMap>(
  _event: E,
  _handle: (payload: EventMap[E]) => void
) {
  /* impl not relevant */
}

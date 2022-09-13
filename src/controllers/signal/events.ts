export function signalEventName(name: string, type: string): string {
  return `signal:${type}:${name}`;
}

export function signalConnectEvent(name: string): string {
  return signalEventName(name, 'connect');
}

export function signalValueEvent(name: string): string {
  return signalEventName(name, 'value');
}

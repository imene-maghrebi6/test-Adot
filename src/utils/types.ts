export type ReactState<T> = [ T, ((value: (((prevState: T) => T) | T)) => void) ]

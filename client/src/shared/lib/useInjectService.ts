import { Container } from "typedi";

export function useInjectService<S>(service: new (...args: unknown[]) => S): S {
  return Container.get(service);
}

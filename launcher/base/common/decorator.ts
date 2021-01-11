export function Inject(target, propertyKey, descriptor) {
  return Object.assign({}, descriptor, {
    initializer: () => {
      return;
    },
  });
}

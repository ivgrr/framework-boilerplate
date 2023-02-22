export const module = (config) => {
  const { components, rootComponent } = config;

  return {
    init() {
      rootComponent.render();

      for (let component of components) {
        component.render();
      }
    },
  };
};

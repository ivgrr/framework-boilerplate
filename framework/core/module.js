export const module = (config) => {
  const { components } = config;
  return {
    init() {
      for (let component of components) {
        component.render();
      }
    },
  };
};

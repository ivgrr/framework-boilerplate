import { IModuleConfig } from '../types//module/IModuleConfig';

export const module = (config: IModuleConfig) => {
  const { components, rootComponent } = config;

  return {
    init() {
      rootComponent.render();

      for (const component of components) {
        component.render();
      }
    },
  };
};

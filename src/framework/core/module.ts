import { IModuleConfig } from '../types//module/IModuleConfig';

export const module = (config: IModuleConfig) => {
  const { rootComponent, components, routes } = config;

  return {
    init() {
      this.initComponents();
      if (routes && routes.length > 0) this.initRouter();
    },
    initRouter() {},
    initComponents() {
      rootComponent.render();

      for (const component of components) {
        component.render();
      }
    },
  };
};

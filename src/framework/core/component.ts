import { IComponent } from '../types/component/IComponent';
import { IComponentConfig } from '../types//component/IComponentConfig';

export const component = (config: IComponentConfig): IComponent => {
  const { template, selector } = config;

  return {
    render() {
      const element = document.querySelector(selector);
      if (!element) throw new Error(`Component ${selector} wasn't found`);
      element.innerHTML = template;
    },
  };
};

import { IModule } from '../types/module/IModule';

export const boot = (module: IModule) => {
  module.init();
};

/* @core */
import { module } from './core/module';
import { component } from './core/component';
import { boot } from './core/boot';

/* @types */
import { IComponent } from './types/component/IComponent';
import { IComponentConfig } from './types/component/IComponentConfig';
import { IModule } from './types/module/IModule';
import { IModuleConfig } from './types/module/IModuleConfig';
import { IRoute } from './types/router/IRoute';

/* @exports */
export {
  module,
  component,
  boot,
  IComponent,
  IComponentConfig,
  IModule,
  IModuleConfig,
  IRoute,
};

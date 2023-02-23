import { IComponent } from '../component/IComponent';

export interface IModuleConfig {
  rootComponent: IComponent;
  components: IComponent[];
  routes: string[];
}

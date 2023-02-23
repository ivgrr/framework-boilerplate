import { IComponent } from '../component/IComponent';
import { IRoute } from '../router/IRoute';

export interface IModuleConfig {
  rootComponent: IComponent;
  components: IComponent[];
  routes?: IRoute[];
}

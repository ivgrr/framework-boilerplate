export interface IModule {
  init(): void;
  initRouter(): void;
  initComponents(): void;
}

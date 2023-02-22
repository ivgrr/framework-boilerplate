export const component = (config) => {
  const { template, selector } = config;

  return {
    render() {
      const element = document.querySelector(selector);
      if (!element) throw new Error(`Component ${selector} wasn't found`);
      element.innerHTML = template;
    },
  };
};

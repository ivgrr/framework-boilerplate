export const component = (config) => {
  const { template, selector } = config;
  return {
    render() {
      document.querySelector(selector).innerHTML = template;
    },
  };
};

interface Parameter {
  key: string;
  value: string | number;
}

export const addParametersToUrl = (params: Parameter[]) => {
  const baseUrl = window.location.origin + window.location.pathname;

  const queryString = params
    .map((param) => `${param.key}=${param.value}`)
    .join("&");

  const newUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  // Update the URL without triggering a page reload
  window.history.replaceState({ path: newUrl }, "", newUrl);
};

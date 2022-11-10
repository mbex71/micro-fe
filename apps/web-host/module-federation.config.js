// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'web-host',
  remotes: ['remote-a', 'remote-b'],
};

module.exports = moduleFederationConfig;

import computed from 'ember-addons/ember-computed-decorators';

export default {
  name: 'activation_key_button',
  initialize(container) {
    const user = container.lookup('current-user:main');
    const siteSettings = container.lookup('site-settings:main');
    const ActivationKeyButtonComponent = container.lookupFactory('component:topic-footer-buttons');
}
}



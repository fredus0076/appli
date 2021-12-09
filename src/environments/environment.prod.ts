export const environment = {
  production: true,
  i18nPaths: [
    'http://localhost:3004',
    'http://localhost:3003',
    'http://localhost:3005'
  ],
  microfrontend: [
    {
      remoteEntry: 'http://localhost:3003/portailEntry.js', // nom du filename
      remoteName: 'portail', // nom de l'expose
      exposedModule: './Portail', // nom declaré du module
      displayName: 'Portail', // nom dans le lien menant a la route
      routePath: 'portail', // nom de la route
      ngModuleName: 'PortailModule' // nom du module partagé
    },
    {
      remoteEntry: 'http://localhost:3005/homeEntry.js', // nom du filename
      remoteName: 'home', // nom de l'expose
      exposedModule: './Home', // nom declaré du module
      displayName: 'Home', // nom dans le lien menant a la route
      routePath: 'home', // nom de la route
      ngModuleName: 'HomeModule' // nom du module partagé
    }
  ]
};

ServiceConfiguration.configurations.remove({
  service: 'github'
});

ServiceConfiguration.configurations.upsert(
  {
    service: 'github'
  },
  {
    $set: {
      clientId: Meteor.settings.githubClientId,
      secret: Meteor.settings.githubSecret
    }
  }
);

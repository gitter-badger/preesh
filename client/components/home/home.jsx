Home = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },

  loginWithGitHub(event) {
    event.preventDefault();

    Meteor.loginWithGithub(error => {
      if (error) {
        console.log(error);
      } else {
        console.log('success');
      }
    });
  },

  render() {
    let authEl;

    if (! this.data.currentUser) {
      return <a href="#" onClick={this.loginWithGitHub}>Login with GitHub</a>;
    }

    return (
      <div className="home">
        {authEl}
        Hello World
      </div>
    );
  }
});

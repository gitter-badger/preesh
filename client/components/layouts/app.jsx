App = React.createClass({
  render() {
    return (
      <div className="app-container">
        {this.props.yield}
      </div>
    );
  }
});

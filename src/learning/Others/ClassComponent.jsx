import React from "react";

class ParentComponent extends React.Component {
  render() {
    return <ChildComponent name="Mimansa" />;
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor()");

    this.state = {
      count: 0,
      name: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  handleClick() {
    console.log("HANDLING CLICK!!");
    this.setState({ name: "Mimansa" });
  }
  incrementCount() {
    console.log("INCREMENTING COUNT!!");
    this.setState({ count: this.state.count + 1 });
  }

  static getDerivedStateFromProps(props, current) {
    // this helps us to synchronize the props and the state
    console.log("getDerivedStateFromProps()");
    // console.log(props);
    // console.log(current);
    // return true;
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    // console.log(nextProps, this.props);
    // console.log(nextState, this.state);
    if (this.props === nextProps && this.state === nextState) return false;
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()");
    // console.log(prevProps);
    // console.log(prevState);
    // setTimeout(() => {
    //   console.log(prevState.name);
    //   console.log(prevState.count);
    //   console.log(prevProps.name);
    // }, 1000);
    return {
      state: { ...prevState },
      props: { ...prevProps },
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate()"); // snapshot is the bridge between the old DOM and the new DOM, something the prevState and the prevProps cannot provide.
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(snapshot);
  }

  render() {
    console.log("render()");
    return (
      <section>
        <article>
          <p>Name: {this.state.name ? this.state.name : "No name"}</p>
          <button onClick={() => this.handleClick()}>Give me a name</button>
        </article>

        <article>
          <p>Count: {this.state.count} </p>
          <button onClick={this.incrementCount}>Increment my count</button>
        </article>
      </section>
    );
  }
}

export default ParentComponent;

import React from "react";

class HelloClass extends React.Component {
    state = {
        name: "Yash",
        count: 0,
    };

    componentDidMount() {
        //when component first time mount
        //ONe time
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        //everytime component updates
        //Many times
        console.log("Component updated");
    }

    componentWillReceiveProps() {
        console.log("New prop received or prop value changedd");
        //now update state
    }

    render() {
        return (
            <div>
                <h1>I am class based component</h1>
                <h2>Hello {this.state.name}</h2>
                <h2>Count is {this.state.count}</h2>
                <h3>City is {this.props.city}</h3>
                <button
                    onClick={() => {
                        //Now change state
                        // setName("Shivam")
                        this.setState({
                            ...this.state,
                            name: "Shivam",
                        });
                    }}
                >
                    Click Me
                </button>

                <button
                    onClick={() => {
                        this.setState({
                            ...this.state,
                            count: this.state.count + 1,
                        });
                    }}
                >
                    Add Count
                </button>
            </div>
        );
    }
}

export default HelloClass;

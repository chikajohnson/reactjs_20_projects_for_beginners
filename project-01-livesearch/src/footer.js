import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer className="text-muted bg-dark h-100">
                <div className="container h-100">
                    <p className="float-right">
                        <a href="#" className="text-light p-4">Back to top</a>
                    </p>
                    <p className="pt-4 font-weight-bold">Movies &copy; bootstrap</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
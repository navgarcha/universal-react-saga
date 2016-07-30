import { Component, PropTypes } from 'react';

export const doctype = '<!doctype html>';

export default class Albums extends Component {
    static propTypes = {
        state: PropTypes.object.isRequired,
        html: PropTypes.string.isRequired
    }

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <title>Universal React Saga</title>

                    <link rel="stylesheet" href="/build/main.css" />
                </head>
                <body>
                    <div id="mount" dangerouslySetInnerHTML={{__html: this.props.html}} />
                    <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.state)};`}} />

                    <script src="/build/main.js"></script>
                </body>
            </html>
        );
    }
}

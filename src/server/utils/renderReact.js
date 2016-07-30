import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import HTMLDocument, { doctype } from 'server/views/HTMLDocument';
import routes from 'routes';
import rootSaga from 'sagas';
import configureStore from 'store';

function renderApplication(props) {
    return doctype + renderToStaticMarkup(<HTMLDocument {...props} />);
}

export default function(request, reply) {
	const store = configureStore();

	match({routes, location: request.url}, (error, redirect, props) => {
		if (error) {
			reply(error.message).code(500);
		} else if (redirect) {
			reply.redirect(redirect.pathname + redirect.search);
		} else if (props) {
			const rootComponent = (
				<Provider store={store}>
					<RouterContext {...props} />
				</Provider>
			);

			store.runSaga(rootSaga).done.then(() => {
				const state = store.getState();
                const html = renderToString(rootComponent);

				reply(renderApplication({state, html}));
			});

			// Trigger sagas for component to run
			// https://github.com/yelouafi/redux-saga/issues/255#issuecomment-210275959
			renderToString(rootComponent);

			// Dispatch a close event so sagas stop listening after they're resolved
			store.close();
		} else {
			reply('Not Found').code(404);
		}
	});
}

import { Route, IndexRoute } from 'react-router';
import AlbumsList from 'containers/AlbumsList';
import Photos from 'containers/Photos';
import Chrome from 'components/Chrome';
import Home from 'components/Home';
import Albums from 'components/Albums';
import NoMatch from 'components/NoMatch';

export default (
	<Route path="/" component={Chrome}>
		<IndexRoute component={Home} />

		<Route path="albums" component={Albums}>
			<IndexRoute component={AlbumsList} />
			<Route path=":albumId" component={Photos} />
		</Route>

		<Route path="*" component={NoMatch} />
	</Route>
);

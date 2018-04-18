import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<h1>Preact footer</h1>
			</footer>
		);
	}
}

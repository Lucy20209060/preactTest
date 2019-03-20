import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	componentDidMount() {
		
	}
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<img src={require('../../assets/icons/favicon-16x16.png')} />
			</div>
		);
	}
}

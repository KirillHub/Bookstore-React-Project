import Books from '../../Components/Books/Books';
import './Sale.scss';

export default function Sale() {

	return (
		<div className="sale">

			<div className="sale__header">
				<div className="sale__title">Распродажа</div>
			</div>
			<div className="sale__body">
				<Books />
			</div>

		</div>
	)
}
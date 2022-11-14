import BooksCollection from './BooksCollection/BooksCollection';
import Description from './Description/Description';
import './Promo.scss';


export default function Promo() {

	return (
		<div className="promo">
			<Description />
			<BooksCollection />
		</div>
	)
}
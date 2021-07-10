import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, removeService, cancelService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		if (!item.id) {
			dispatch(addService(item.name, item.price));
			return;
		}
		dispatch(removeService(item.id));
		dispatch(addService(item.name, item.price))
	}

	const handleCancel = evt => {
		evt.preventDefault();
		dispatch(cancelService());
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{item.id && <button onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;
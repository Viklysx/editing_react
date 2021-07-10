import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, changeServiceField, cancelService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const editId = useSelector(state => state.serviceAdd.id);
  const dispatch = useDispatch();

  const handleRemove = id => {
    if (!editId || editId !== id) {
      dispatch(removeService(id));
    }
    dispatch(cancelService());
  }

  const handleEdit = item => {
    const {id, name, price} = item;
    dispatch(changeServiceField('name', name));
    dispatch(changeServiceField('price', price));
    dispatch(editService(id))
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>&#9998;</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
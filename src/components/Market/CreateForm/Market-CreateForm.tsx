import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GeneralStateProps } from '../../../redux/marketReducer';
import { ActionTypes } from '../../../redux/actions';
import Preloader from '../../Preloader/Preloader';
import './Market-CreateForm.css';

const MarketCreateForm = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [prevUrl, setPrevUrl] = useState<string | undefined>();
  const { formState } = useSelector(
    (state: { marketStore: GeneralStateProps }) => state.marketStore
  );
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const action = {
      type: ActionTypes.CHANGE_FORM,
      payload: { name: e.target.name, value: e.target.value },
    };
    dispatch(action);
  };

  const onClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { title, price, image, article } = formState;

    if (title && price && image && article) {
      const action = {
        type: ActionTypes.CREATE_PRODUCT,
      };
      dispatch(action);
      setPrevUrl(undefined);
    }
  };

  const { title, price, discount, article } = formState;

  return (
    <>
      <div
        onClick={(e: FormEvent) => {
          e.preventDefault();
        }}
        className='Market-CreateForm'
      >
        <div className='CreateForm-Block'>
          <label htmlFor='title' className='CreateForm-Label'>
            Название товара товара
            <input
              required
              type='text'
              name='title'
              id='title'
              value={title}
              className='CreateForm-Input'
              onChange={onChange}
            />
          </label>
        </div>
        <div className='CreateForm-Block'>
          <label htmlFor='price' className='CreateForm-Label'>
            Цена товара
            <input
              required
              type='number'
              id='price'
              name='price'
              value={price}
              className='CreateForm-Input'
              onChange={onChange}
            />
          </label>
        </div>
        <div className='CreateForm-Block'>
          <label htmlFor='discount' className='CreateForm-Label'>
            Скидка на товар
            <input
              type='number'
              id='discount'
              name='discount'
              value={discount}
              className='CreateForm-Input'
              onChange={onChange}
            />
          </label>
        </div>
        <div className='CreateForm-Block'>
          <label htmlFor='article' className='CreateForm-Label'>
            Артикул товара
            <input
              required
              type='text'
              id='article'
              name='article'
              value={article}
              className='CreateForm-Input'
              onChange={onChange}
            />
          </label>
        </div>
      </div>
      <input
        required
        type='file'
        name='image'
        id='file-input-id'
        className='CreateForm-Input_type_file'
        onClick={() => {}}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files?.[0]) {
            setBusy(true);
            const reader = new FileReader();
            reader.addEventListener('load', () => {
              const action = {
                type: ActionTypes.CHANGE_FORM,
                payload: { name: 'image', value: reader.result?.toString() },
              };
              dispatch(action);
              setPrevUrl(reader.result?.toString());
              setBusy(false);
            });
            reader.readAsDataURL(e.target.files[0]);
          }
        }}
      />
      <button
        onClick={(e: FormEvent<HTMLButtonElement>) => {
          e.preventDefault();
        }}
        className='CreateForm_Button_for_file'
      >
        Выбрать изображение
      </button>
      <button onClick={onClick} className='CreateForm-Button_for_create'>
        Добавить товар
      </button>

      {prevUrl && (
        <div className='Preview'>
          <img src={prevUrl} className='CreateForm-PreviewImage' />
        </div>
      )}
      {busy && <Preloader />}
    </>
  );
};

export default MarketCreateForm;

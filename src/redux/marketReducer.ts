import { nanoid } from 'nanoid';
import { ProductItemProps } from '../components/Market/ProductItem/Market-ProductItem';
import { ActionTypes } from './actions';

type FormStateProps = {
  title: string;
  price: number;
  discount: number;
  article: string;
  image: string | null;
};

export type GeneralStateProps = {
  formState: FormStateProps;
  productList: ProductItemProps[];
};

type ActionTypeWithoutPayload = {
  type: ActionTypes.CREATE_PRODUCT;
};

type ActionTypeChangeForm = {
  type: ActionTypes.CHANGE_FORM;
  payload: { name: string; value: string | number };
};

type AllActionTypes = ActionTypeWithoutPayload | ActionTypeChangeForm;

const initFormState: FormStateProps = {
  title: '',
  price: 0,
  discount: 0,
  article: '',
  image: null,
};

const initialState = {
  formState: initFormState,
  productList: [],
};

export default function marketReducer(
  state: GeneralStateProps = initialState,
  action: AllActionTypes
) {
  switch (action.type) {
    case ActionTypes.CREATE_PRODUCT:
      return {
        ...state,
        productList: [
          ...state.productList,
          {
            ...state.formState,
            id: nanoid(4),
            discount:
              state.formState.discount === 0
                ? undefined
                : state.formState.discount,
          },
        ],
        formState: initFormState,
      };

    case ActionTypes.CHANGE_FORM:
      return {
        ...state,
        formState: {
          ...state.formState,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return { ...state };
  }
}

export const ComfyStoreReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case "get_products": {
      return {
        ...state,
        products: payload,
      };
    }
    case "add_bought_item": {
      const existingBought = state.bought.find(
        (item: any) => item.product.id === payload.id
      );
      return {
        ...state,
        bought: existingBought
          ? state.bought.map((item: any) =>
              item.product.id === payload.id
                ? { ...item, amount: item.amount + 1 }
                : item
            )
          : [
              ...state.bought,
              {
                product: payload,
                amount: 1,
              },
            ],
      };
    }
    case "remove_bought_item": {
      return {
        ...state,
        bought: state.bought.filter(
          (item: any) => item.product.id != payload.product.id
        ),
      };
    }

    case "increase_bought_item_amount": {
      return {
        ...state,
        bought: state.bought.map((item: any) =>
          item.product.id === payload.product.id
            ? { ...item, amount: item.amount + 1 }
            : item
        ),
      };
    }

    case "decrease_bought_item_amount": {
      return {
        ...state,
        bought: state.bought.filter((item: any) => {
          if (item.product.id === payload.product.id) {
            if (item.amount === 1) {
              return false;
            } else {
              return {
                ...item,
                amount: item.amount - 1,
              };
            }
          }
          return item;
        }),
      };
    }

    case "set_show_modal": {
      return {
        ...state,
        showModal: payload,
      };
    }

    default: {
      return state;
    }
  }
};

import { createStore } from 'vuex';

export default createStore({
  state: {
    items: [
      {
        "name": "foo1",
        "value": "bar1",
      },
      {
        "name": "foo2",
        "value": "bar2",
      },
      ],
    editItem: null,
  },
  mutations: {

    // Mutation to update an existing item
    updateItem(state, item) {
      if (state.editItem) {
        Object.assign(state.editItem, item);
        state.editItem = null;
      }
    },

    // Mutation to set the item being edited
    editItem(state, item) {
      state.editItem = item;
    },

  },
});

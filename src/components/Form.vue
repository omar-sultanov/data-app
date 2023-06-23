<template>
  <div v-if="isEdit">
    <form
      class="row g-3 my-3 border-bottom pb-4"
      @submit.prevent="handleSubmit"
    >
      <div class="col-md-12">
        <label for="inputValue" class="form-label"
          >Value
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            fill="currentColor"
            class="bi bi-asterisk"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"
            /></svg
        ></label>
        <input
          type="text"
          v-model="item.value"
          class="form-control"
          id="inputValue"
          required
        />

        <button type="submit" class="btn btn-primary px-5 mt-3 rounded-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-plus-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            />
            <path
              fill-rule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
            /></svg
          >Save
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Form',
  computed: {
    ...mapState(['editItem']),

    // Computed property to determine if the form is in edit mode or add mode
    isEdit() {
      return !!this.editItem;
    },

    // Computed property for the item object being edited or a new item
    item: {
      get() {
        return (
          this.editItem || {
            value: '',
          }
        );
      },
      set(value) {
        this.updateItem(value);
      },
    },
  },
  methods: {
    ...mapMutations(['updateItem']),
    handleSubmit() {
      if (this.isEdit) {
        this.updateItem(this.item);
      }
      this.item = {};
    },
  },
};
</script>
<style>
label {
  font-size: 13px;
  font-weight: bold;
}
.btn-primary {
  font-size: 12px;
}
label svg {
  color: brown;
  margin-bottom: 4px;
}
button svg {
  margin-right: 6px;
}
</style>

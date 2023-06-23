<template>
  <div>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Value</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
          <td>
            <button
              id="btn-update"
              type="button"
              class="btn btn-secondary p-1 rounded-0"
              @click="editItem(item)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                /></svg
              ><span>Update</span>
            </button>
           
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
export default {
  name: 'List',
  computed: mapState(['items']),
  methods: {
    ...mapMutations(['editItem']),
  },
};
</script>

<style>
caption {
  font-size: 20px;
  color: black;
}
th,
td {
  font-weight: 400;
  font-size: 12px;
}
#btn-update {
  font-size: 10px;
  margin-right: 5px;
}
#btn-remove {
  font-size: 10px;
}

#btn-update svg {
  color: white;
  margin-right: 5px;
}
</style>

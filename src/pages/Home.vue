<template>
  <div class="Home">
    <Header />
    <Form/>
    <List />
  </div>
</template>

<script>
import Form from '../components/Form.vue';
import List from '../components/List.vue';
import Header from '../components/Header.vue';

export default {
  name: 'HomePage',
  components: { Form, Header, List },
};
</script>
<style>
.Home {
  width: 50%;
  margin: 0 auto;
}
</style>

<template>
  <div>
    <pre>{{ data?.data?.pets.length }}</pre>
    <button @click="onClick">click</button>
  </div>
</template>

<!-- <script lang="ts" setup> -->
<script setup>
const query = gql`
  query findAll {
    pets {
      id
      name
    }
  }
`
let data = ref(null);

async function onClick (){
  return ( data.value = await useAsyncQuery(query) );
}
</script>
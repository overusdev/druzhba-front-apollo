<template>
    <div class="main">
      <div class="container">
        <div class="main__head">
          <pre>{{ variables }}</pre>
        </div>
        <div class="test">
          <div
            class="test__result"
            v-for="(item, i) in petsList"
            :key="i"
          >
            <div class="test__result-wrapper">
              <span class="test__result-header">ID: {{ item.id }} </span>
              <span>Name: "{{ item.name }}" Type: {{ item.type || "Not set" }}</span>
            </div>
            
          </div>
          <div class="test__form-wrapper">
            <input class="test__input" type="text" v-model="variables.name">
            <input class="test__input" type="text" v-model="variables.type">
            <button 
              class="test__button"
              :class="{ 'test__button--disabled': disabled }"
              @click="createComment"
            >
              Add new pet
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
let petsQueryResult = reactive([]);
const variables = ref({
  name: '',
  type: ''
})
const query = gql`
  query findAll {
    pets {
      id
      name
      type
    }
  }
`;

const mutatePet = gql`
  mutation createPet($name: String!, $type: String!){
    createPet(createPetInput: { name: $name, type: $type }) {
      id
      name
      type
    }
  }
`;

const { mutate: createPet } = useMutation(mutatePet, variables.value);

async function initPets() {
  const { data } = await useAsyncQuery(query);

  if(data?.value?.pets) {
    console.log(data.value.pets);
    petsQueryResult = data.value.pets;
  }
}

const createComment = async () => {
  try {
    const { data } = await createPet(variables.value);
    petsQueryResult.push(data.createPet);
    variables.value.name = "";
    variables.value.type = "";
  } catch (error) {
    console.log({ error });
  }
};

await initPets();

const petsList = computed(() => petsQueryResult || [] );
const disabled = computed(() => variables.value.name == '' || variables.value.type == '' );
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

.test {
  &__form-wrapper {
    width: 30%;
    display: flex;
    flex-direction: column;
  }
  &__result {
    margin-bottom: 8px;
  }
  &__result-header {
    font-weight: 700;
    margin-right: 8px;
  }
  &__input {
    outline: none;
    border-radius: 4px;
    padding: 8px;
    border: 1px solid #686565;
    margin-bottom: 8px;
  }
  &__button {
    outline: none;
    border-radius: 4px;
    padding: 8px;
    border: 1px solid #686565;
    margin-bottom: 8px;
    cursor: pointer;

    &--disabled {
      pointer-events: none;
      opacity: .5;
    }
  }
}
.main {
  &__head {
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    @include desktop {
      margin: 44px 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

  }

}
</style>
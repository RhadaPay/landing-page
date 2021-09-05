<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <h1>Rhada</h1>
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
      <Menubar :model="items">
        <template #item="{ item }">
          <router-link :to="item.to">
            {{ item.label }}
          </router-link>
        </template>
      </Menubar>
    </Menubar>
    <router-view />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: "/",
      },
      {
        label: "About",
        icon: "pi pi-fw pi-question-circle",
        to: "/about",
      },
    ]);

    return { items };
  },
};
</script>

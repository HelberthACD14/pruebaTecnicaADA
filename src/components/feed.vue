<template lang="pug">
.row.justify-content-center
    ul.list-group
      li.list-group-item(
        v-for="user in users.items")
      
        cardUser(
          :login="user.login",
          :userID="user.id"
        )
</template>
<script lang="ts">
import { getUsers } from "@/services/searchRoutes";
import { Response } from "@/interfaces/Response";
import { defineComponent } from "vue";
import cardUser from "@/components/cardUser.vue";

export default defineComponent({
    name: 'feed',
  data() {
      
      return{
        users: [] as Response[],
        busqueda: ''
      }

  },
  methods: {
    async loadUsers() {
      const res = await getUsers('');
      this.users = res.data;
      console.log(this.users);
    },
  },
  mounted() {
    this.loadUsers();
  },
  components: {
    cardUser,
  },
});
</script>
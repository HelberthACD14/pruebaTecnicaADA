<template lang="pug">
.card.text-white.bg-success
  h2.card-header Nombre de usuario: {{login}}
  .card-body
    h4 ID del usuario
    p.card-text.infoRecipe(v-html="userID")  
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCard",
  props: ["login", "userID"],
});
</script>
<style lang="sass">

</style>
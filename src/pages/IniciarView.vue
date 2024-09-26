<template>
  <v-card class="w-100 h-lg-screen bg-background d-flex align-center justify-space-evenly" image="@/assets/bg/bg-light.svg">

    <v-img class="ma-15" :width="100" max-width="500" aspect-ratio="1/1" cover src="@/assets/img/logo-light.png"/>

    <v-card class="w-33 h-auto bg-transparent align-center" flat>

      <v-btn class="w-100 py-8 bg-primary d-flex align-center rounded-xl font-weight-light" to="/login">Login</v-btn>
      <h2 class="text-secondary d-flex justify-center my-6">OU</h2>
      <v-btn class="w-100 py-8 bg-primary d-flex align-center rounded-xl font-weight-light" to="/cadastrar">Cadastrar</v-btn>

    </v-card>

  </v-card>
</template>

<style>
</style>
<script setup lang="ts">
</script>

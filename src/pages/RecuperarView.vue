<template>
  <v-card class="w-100 h-lg-screen bg-background d-flex align-center justify-space-evenly" image="@/assets/bg/bg-light.svg">

    <v-img class="ma-15" :width="100" max-width="500" aspect-ratio="1/1" cover src="@/assets/img/logo-light.png"/>

    <v-sheet
      class=" text-center bg-transparent w-50 d-flex flex-column align-center"
      max-width="600"
      rounded="lg"
      width="100%"
    >
      <h3 class="text-h2 text-secondary">Verification Code</h3>

      <p class="text-subtitle-2 font-weight-light mb-3">Please enter the verification code sent to your mobile</p>

      <v-otp-input
        v-model="otp"
        length="4"
        width="600"
        height="150"
        max-width="600"
        class="my-6"
      ></v-otp-input>

      <div class="text-caption w-100 d-flex justify-center">
        <v-btn class="w-75 py-8 bg-primary d-flex align-center rounded-xl font-weight-light">Enviar</v-btn>
      </div>
    </v-sheet>

  </v-card>
</template>

<style>
</style>

<script setup lang="ts">
import {ref} from "vue";

const otp = ref()
</script>

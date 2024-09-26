<template>

  <v-card class="w-100" color="background">
    <v-layout>
      <v-app-bar
        color="primary"
      >

        <v-img src="@/assets/img/logo-light.png" class="h-100 mx-4" max-width="100"/>

        <v-spacer></v-spacer>

        <v-text-field
          append-inner-icon="mdi-magnify"
          density="compact"
          variant="outlined"
          flat
          rounded
          hide-details
          single-line
          bg-color="transparent"
          max-width="400"
        ></v-text-field>

        <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </v-app-bar>

        <v-card flat class="bg-transparent d-flex align-center justify-center position-relative" height="100vh" width="100vw">
          <h2 class="text-primary">Ainda não salvou nenhum link</h2>
          <v-btn icon class="position-absolute right-0 bottom-0 ma-6 bg-primary" @click="handleSingOut" v-if="isLoggedIn">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>

    </v-layout>
  </v-card>


</template>

<script lang="ts" setup>

import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut, type Auth} from "firebase/auth";
import router from "@/router";

const isLoggedIn = ref(false);

let auth: Auth | null = null;
onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth,(user)=>{
    isLoggedIn.value = !!user;
  })
})

const handleSingOut = ()=>{
  if (auth){
    signOut(auth).then(()=>{
      router.push("/iniciar")
    })
  }
}
</script>

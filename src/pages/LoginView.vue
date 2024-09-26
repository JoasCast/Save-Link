<template>
  <v-card class="w-100 h-lg-screen bg-background d-flex align-center justify-space-evenly" image="@/assets/bg/bg-light.svg">

    <v-img class="ma-15" :width="100" max-width="500" aspect-ratio="1/1" cover src="@/assets/img/logo-light.png"/>

    <form class="w-33 d-flex flex-column align-center">

      <v-text-field
        variant="outlined"
        flat
        rounded
        hide-details
        bg-color="grey-lighten-3"
        max-width="800"
        width="100%"
        label="Email"
        v-model="email"
        class="py-4"
      ></v-text-field>

      <v-text-field
        variant="outlined"
        flat
        rounded
        hide-details
        bg-color="grey-lighten-3"
        max-width="800"
        width="100%"
        label="Senha"
        v-model="password"
        class="py-4"
      ></v-text-field>

      <v-btn class="w-75 py-8 my-12 bg-primary d-flex align-center rounded-xl font-weight-light" type="button" @click="register">Entrar</v-btn>
      <v-btn icon class="w-75 py-8 bg-white d-flex align-center rounded-xl font-weight-light border-sm border-opacity-100 border-primary" type="button" @click="signInWithGoogle" >
        <v-icon color="primary" class="mx-4">mdi-google</v-icon>
        Login com Google
      </v-btn>
    </form>

  </v-card>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {useRouter} from "vue-router";
const email = ref()
const password = ref()
const router = useRouter()
const errMsg = ref()


const register = (event: Event)=>{
  event.preventDefault();
  signInWithEmailAndPassword( getAuth(), email.value, password.value )
    .then((data)=>{
      console.log(data)
      router.push(`/`)
    })
    .catch((error)=>{
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Email invalido!'
          break;
        case 'auth/user-not-found':
          errMsg.value = 'User not found!'
          break;
        case 'auth/wrong-password':
          errMsg.value = 'senha incorreta!'
          break;
        default:
          errMsg.value = 'email ou senha incorretos';
      }
    })
}

const signInWithGoogle= ()=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result)=>{
      console.log(result.user)
      router.push('/')
    })
    .catch((error)=>{
      console.log(error.code)
    })
}
</script>

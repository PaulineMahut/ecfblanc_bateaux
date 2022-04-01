<template>
  <div>
    <h1>Gestion des bateaux</h1>
    <p>Gère tes bateaux bouffon</p>
    <form @submit.prevent="handleSubmit">
      <label for="nom">Nom</label>
      <input type="text" name="nom" id="nom" v-model="bateauStore.nom" />
      <label for="taille">Taille</label>
      <input type="number" name="taille" id="taille" v-model="bateauStore.taille" />
      <label for="proprietaire">Propriétaire</label>
      <input type="text" name="proprietaire" id="proprietaire" v-model="bateauStore.proprietaire" />
      <label for="prix">Prix</label>
      <input type="float" name="prix" id="prix" v-model="bateauStore.prix" />
      <input type="submit" value="Ajouter un bateau" />
      <p v-if="store.prix">Vous avez bien ajouter un bateau !</p>
    </form>
  </div>
</template>

<script setup>
import { useBateauStore } from "../stores/bateau";
import { reactive } from "vue";

const store = useBateauStore();
const bateauStore = reactive({
    bateau : {
    nom:"",
    taille:0,
    proprietaire:"",
    prix:0,
    },
});

function handleSubmit() {
    console.log("dgfdg");
    store.nom = bateauStore.nom;
    store.taille = bateauStore.taille;
    store.proprietaire = bateauStore.proprietaire;
    store.prix = bateauStore.prix;
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
form input {
  padding: 10px;
}
form input[type="submit"] {
  margin-top: 10px;
}
</style>

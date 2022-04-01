<template>
    <div>
        <table>
            <thead>
                Liste des bateaux
            </thead>
            <tr>
                <th>Nom</th>
                <th>Taille</th>
                <th>Proprétaire</th>
                <th>Prix Mensuel</th>
            </tr>
            <tr>
                <th>{{store.nom}}</th>
                <th>{{store.taille}}</th>
                <th>{{store.proprietaire}}</th>
                <th>{{store.prix}}</th>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { useBateauStore } from "../stores/bateau";
const store = useBateauStore();
</script>

<style lang="scss" scoped>

</style>
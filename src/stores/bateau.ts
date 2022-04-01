import { defineStore } from 'pinia'

export const useBateauStore = defineStore({
  id: 'bateau',
  state: () => ({
    bateau : {},
  }),
  persist: true,
  getters: {
  },
  actions: {
  }
})

<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <routerLink
        class="text-white font-bold uppercase text-2xl mr-4"
        to="/"
        exact-active-class="no-active"
        >Music</routerLink
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <routerLink class="text-white px-2" to="/about" v-show="false">About</routerLink>
          </li>
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2 text-white" @click.prevent="toggleAuthModal"> Login / Register </a>
          </li>

          <template v-else>
            <li>
              <routerLink class="px-2 text-white" to="/manage">Manage</routerLink>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="signOut">Logout</a>
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <a href="#" class="px-2 text-white" @click.prevent="changeLocale">
            {{ currentLocale }}
          </a>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === 'fr' ? 'French' : 'English'
    }
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen

      console.log(this.modalStore.isOpen)
    },
    signOut() {
      this.userStore.signOut()
      if (this.$route.name === 'manage') {
        this.$router.push({ name: 'home' })
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'fr' ? 'en' : 'fr'
    }
  }
}
</script>

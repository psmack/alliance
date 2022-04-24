<template>
  <q-layout view="lHr lpR fFf">

    <q-header
      bordered
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <!-- <q-avatar>
            <img src="alliance\public\icons\Fulcrum.png">
          </q-avatar> -->
          <span>{{ $route.name}}</span>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="283"
      bordered
    >
      <!-- Left drawer content -->
      <q-avatar
        class="q-ma-md"
        size="md"
      >
        <img src="alliance.png">
      </q-avatar>
      <!-- <font-awesome-icon icon="fa-solid fa-solar-system" name="fas fa-dove"/> -->
      <q-list>
        <q-item
          to="/"
          clickable
          v-ripple
          exact
        >
          <q-item-section avatar>
            <q-icon color="primary" name="home" size="md"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item
          to="/about"
          clickable
          v-ripple
          exact
        >
          <q-item-section avatar>
            <q-icon color="primary" name="help" size="md"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- Right drawer content -->
      <q-input
        placeholder="Search Alliance"
        class="q-ma-md"
        outlined
        rounded
        dense
        v-model="text"
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list
        separator
        padding
      >
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Alert</q-item-label>
            <q-item-labe class="text-weight-bold">Jedi Children Massacre</q-item-labe>
            <q-item-label caption>Anakin Skywalker murdered all the children at Jedi temple.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>4 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Alert</q-item-label>
            <q-item-labe class="text-weight-bold">Jedi Temple Fallen</q-item-labe>
            <q-item-label caption>Temple is under attacked by Sith and Clones.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Alert</q-item-label>
            <q-item-labe class="text-weight-bold">Order 66</q-item-labe>
            <q-item-label caption>Supreme Chancellor Sheev Palpatine executed Order 66 forcing the clones to view the Jedi as a dangerous threat that needs to be eliminated at all costs.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
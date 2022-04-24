<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newAllianceContent"
          class="new-alliance"
          placeholder="What's happening?"
          counter
          maxlength="280"
          :dense="dense"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="Fulcrum.png">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          :disable="!newAllianceContent"
          label="Send"
          class="q-mb-lg"
          color="primary"
          unelevated
          rounded
          no-caps
        />
      </div>
    </div>

    <q-separator
      class="divider"
      size="10px"
      color="grey-2"
    />

    <q-list>
      <q-item-label header>Alliance</q-item-label>

      <q-item
        class="q-py-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar top>
          <q-avatar>
            <img src="Fulcrum.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Fulcrum</strong>
            <span class="text-grey-7">
              @fulcrum_tano
            </span>
          </q-item-label>
          <q-item-label class="alliance-content text-body1">
            Hello World
          </q-item-label>
          <div class="alliance-icon row justify-between q-mt-sm">
            <q-btn
              color="grey"
              size="sm"
              icon="far fa-comment"
              flat
              round
            />
            <q-btn
              color="grey"
              size="sm"
              icon="fas fa-retweet"
              flat
              round
            />
            <q-btn
              color="grey"
              size="sm"
              icon="far fa-heart"
              flat
              round
            />
            <q-btn
              color="grey"
              size="sm"
              icon="fas fa-trash"
              flat
              round
            />
          </div>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      newAllianceContent: ''
    }
  }
})
</script>

<style lang="sass">
.new-alliance
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.alliance-content
  white-space: pre-line
.alliance-icon
  margin-left: -5px
</style>
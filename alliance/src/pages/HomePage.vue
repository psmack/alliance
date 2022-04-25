<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
            @click="addNewMessage"
            label="Send"
            class="q-mb-lg"
            color="primary"
            unelevated
            rounded
            no-caps
          />
            <!-- :disable="!newAllianceContent" -->
        </div>
      </div>

      <q-separator
        class="divider"
        size="10px"
        color="grey-2"
      />

      <q-list separator>
        <q-item-label header>Alliance</q-item-label>

        <transition-group
          appear
          enter-active-class="animated fadeIn slow"
          leave-active-class="animated fadeOut slow"
        >
          <q-item
            v-for="message in messages"
            :key="message.id"
            class="alliance-message q-py-sm"
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
                  <br class="lt-md">&bull; {{ relativeDate(message.date) }}
                </span>
              </q-item-label>
              <q-item-label class="alliance-content text-body1">
                {{ message.content }}
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
                  @click="deleteMessage(message)"
                  color="grey"
                  size="sm"
                  icon="fas fa-trash"
                  flat
                  round
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { collection, query, orderBy, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import { defineComponent } from 'vue'
import { formatDistance } from 'date-fns'

export default defineComponent({
  name: 'HomePage',
  data() {
    return {
      newAllianceContent: '',
      messages: [
        // {
        //   content: 'Every problem has a gift for you in its hands. - Richard Bach',
        //   date: 1650836213298
        // },
        // {
        //   content: 'I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability. - - Confucius',
        //   date: 1650836198704
        // }
      ]
    }
  },
  methods: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    },
    addNewMessage() {
      let newMessage = {
        content: this.newAllianceContent,
        date: Date.now()
      }
      // Add to array by early to later
      // this.messages.unshift(newMessage)

      // Add to firebase
      try {
        const docRef = addDoc(collection(db, "messages"), newMessage)
        console.log("Document written with ID: ", docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e)
      }
      // Reset new message placeholder
      this.newAllianceContent = ''
    },
    deleteMessage(message) {
      // let idToDelete = message.id
      // let index = this.messages.findIndex(message => message.id === idToDelete)
      // this.messages.splice(index, 1)
      try {
        deleteDoc(doc(db, 'messages', message.id))
        console.log("Document successfully deleted!")
      } catch (e) {
        console.error("Error removing document: ", e)
      }
    }
  },
  mounted() {
    let messageData = collection(db, 'messages')
    let q = query(messageData, orderBy('date'))
    let updateMessages = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let messageChange = change.doc.data()
        messageChange.id = change.doc.id
        if (change.type === 'added') {
          console.log('New message: ', messageChange)
          this.messages.unshift(messageChange)
        }
        if (change.type === 'modified') {
          console.log('Modified message: ', messageChange)
        }
        if (change.type === 'removed') {
          console.log('Removed message: ', messageChange)
          let index = this.messages.findIndex(message => message.id === messageChange.id)
          this.messages.splice(index, 1)
        }
      })
    })
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
.alliance-message:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
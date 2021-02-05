<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card class="cardsize">
          <q-card-section>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h4 ellipsis">
                회원가입
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="id"
                label="Id"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="pw"
                label="Password"
                lazy-rules

              />

              <div>
                <q-btn label="Login" to="/" type="button" color="primary"/>
              </div>
              
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
    export default {
        data() {
            return {
                id: null,
                pw: null,
                birthday: null,
                name: null,
                address: null,
                role: null, // role: 0 == 일반회원 /// role:1 == 버드 회원
                phone: null,
                point: null
            }
        },
    }
</script>

<style>

  .bg-image {
   background-image: linear-gradient(135deg, #295F2D 0%, #FFE76C 100%);
   /* background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%); */
  }
</style>

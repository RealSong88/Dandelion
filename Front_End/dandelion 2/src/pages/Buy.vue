<template>
  <q-page class="q-px-md">
    <h3 class="q-mb-sm">주문/결제</h3>
    <section>
      <div class="row">
        <div class="col-6">
          <h4 class="q-mb-sm">상품 정보</h4>
          <div class="row">
            <div class="col-6">
              <q-img
                contain
                :src="curItem.itemImg"
                :ratio="1"
              />
            </div>
            <div class="col-6 q-px-md">
              <div class="text-h5 q-mb-none q-mt-md">{{curItem.title}}</div>
              <div class="text-subtitle1 q-mt-sm">{{curItem.desc}}</div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <section>
            <h4 class="q-mb-sm">구매자 정보</h4>
            <q-list bordered class="rounded-borders">
              <q-item>
                <q-item-section class="col-2 gt-sm">이름</q-item-section>
                <q-item-section><q-input v-model="name" /></q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2 gt-sm">이메일</q-item-section>
                <q-item-section><q-input v-model="email" /></q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="col-2 gt-sm">휴대전화</q-item-section>
                <q-item-section><q-input v-model="phone" /></q-item-section>
              </q-item>
            </q-list>
          </section>
          <section>
            <h4 class="q-mb-sm">구매 방법</h4>
            <q-tabs
              v-model="payMethod"
              inline-label
              class="bg-purple text-white shadow-2"
            >
              <q-tab name="pickup" icon="archive" label="픽업" />
              <q-tab name="connector" icon="pedal_bike" label="커넥터" />
            </q-tabs>
            <div v-show="payMethod == 'pickup'" class="q-px-sm">
              <h5 class="q-my-sm">보관소 위치</h5>
              <q-select v-model="pickupSpace" :options="pickupOptions" label="보관소 위치를 선택하세요." />
              <div v-if="pickupSpace" class="text-subtitle1 q-mt-sm">{{pickupSpace.desc}}</div>
            </div>
            <div v-show="payMethod == 'connector'" class="q-px-sm">
              <h5 class="q-my-sm">배송 정보</h5>
              <q-list bordered class="rounded-borders">
                <q-item>
                  <q-item-section class="col-2 gt-sm">상품 가격</q-item-section>
                  <q-item-section><q-input v-model="addr" label="주소를 입력하세요" /></q-item-section>
                </q-item>
                <q-item>
                  <q-item-section class="col-2 gt-sm">연락처</q-item-section>
                  <q-item-section><q-input v-model="phone" /></q-item-section>
                </q-item>
                <q-item>
                  <q-item-section class="col-2 gt-sm">요청사항</q-item-section>
                  <q-item-section><q-input v-model="request" label="예) 문 앞에 놓아주세요" /></q-item-section>
                </q-item>
              </q-list>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section>
      <h4 class="q-mb-sm">상품 정보</h4>

      <q-list bordered class="rounded-borders">
        <q-item>
          <q-item-section class="col-2 gt-sm">상품 가격</q-item-section>
          <q-item-section>{{numberWithCommas(curItem.price)}}원</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-2 gt-sm">{{payMethod == 'pickup' ? '보관소 이용료': '커넥터 수수료'}}</q-item-section>
          <q-item-section>{{numberWithCommas(servicePrice)}}원</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-2 gt-sm">보유 단탈캐시</q-item-section>
          <q-item-section>{{numberWithCommas(cash)}}원</q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="col-2 gt-sm">결제 후 잔액</q-item-section>
          <q-item-section>{{numberWithCommas(cash - curItem.price - servicePrice)}}원</q-item-section>
        </q-item>
      </q-list>
    </section>
    <section class="text-center">
      <q-btn size="xl" color="primary" class="q-px-xl q-my-md">결제하기</q-btn>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Buy',
  data () {
    return {
      name: '김댕댕',
      email: 'dangdangkim@gmail.com',
      phone: '010-1234-5678',
      payMethod: 'pickup',
      pickupSpace: null,
      addr: '',
      request: '',
      cash: 300000000,
      pickupOptions: [
        {
          value: 1,
          label: '낙성대역',
          desc: '서울 관악구 남부순환로 지하 1928'
        },
        {
          value: 2,
          label: '건대입구역',
          desc: '서울 광진구 아차산로 243'
        },
        {
          value: 3,
          label: '신촌역',
          desc: '서울 마포구 신촌로 지하 90'
        },
      ],
      itemList: [
        {
          id: 1,
          title: '마이너스통장 팝니다',
          price: 100000,
          desc: '한 -10만원정도 있어요 사주세요',
          itemImg: 'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F270B004E569277FA18FDCB',
          seller: {
            id: 1,
            name: '신용불량자'
          }
        },
        {
          id: 2,
          title: '금빛시티에서 공짜로 얻은 자전거',
          price: 1000000,
          desc: '별로 안탔어요',
          itemImg: 'https://m.benerobike.com/web/product/big/201805/10_shop1_242570.jpg',
          seller: {
            id: 2,
            name: '지우'
          }
        },
        {
          id: 3,
          title: 'LG 그램 17인치',
          price: 2548000,
          desc: '대학교가서 공부하라고 삼촌이 사줬는데 자퇴했어요',
          itemImg: 'https://images-na.ssl-images-amazon.com/images/I/71%2BEwud0jCL._AC_SL1497_.jpg',
          seller: {
            id: 3,
            name: '음악할거야'
          }
        },
        {
          id: 4,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 4,
            name: '판매자4'
          }
        },
        {
          id: 5,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 5,
            name: '판매자5'
          }
        },
        {
          id: 6,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 6,
            name: '판매자6'
          }
        },
        {
          id: 7,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 7,
            name: '판매자7'
          }
        },
        {
          id: 8,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 8,
            name: '판매자8'
          }
        },
        {
          id: 9,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 9,
            name: '판매자9'
          }
        },
        {
          id: 10,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 10,
            name: '판매자10'
          }
        },
        {
          id: 11,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 4,
            name: '판매자4'
          }
        },
        {
          id: 12,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 5,
            name: '판매자5'
          }
        },
        {
          id: 13,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 6,
            name: '판매자6'
          }
        },
        {
          id: 14,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 7,
            name: '판매자7'
          }
        },
        {
          id: 15,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 8,
            name: '판매자8'
          }
        },
        {
          id: 16,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 9,
            name: '판매자9'
          }
        },
        {
          id: 17,
          title: '팔아요',
          price: 0,
          desc: '',
          itemImg: 'https://tntwatches.in/image/cache/placeholder-550x550.png',
          seller: {
            id: 10,
            name: '판매자10'
          }
        },
      ]
    }
  },
  computed: {
    itemId () {
      return this.$route.params.itemId
    },
    curItem () {
      return this.itemList.filter(i => i.id == this.itemId)[0]
    },
    servicePrice () {
      return this.payMethod == 'pickup' ? 3000: 2000
    }
  },
  methods : {
    onDetail (itemId) {
      this.$router.push(`/detail/${itemId}`)
    },
    numberWithCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
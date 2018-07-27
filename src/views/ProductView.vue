<template>
  <div class="container product">
    <div class="product-view" v-if="$store.state.selectedProduct.active">
      <div class="product-name">
        {{ $store.state.selectedProduct.name }}
      </div>
      <div class="product-photo">
        <img @click="nextPhoto()" :src="photo.src">
      </div>
      <div class="product-price">
        <span>{{ $store.state.selectedProduct.price | currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      photo: {
        active: 0,
        src: ''
      }
    }
  },
  created () {
    const $ = this
    const pid = parseInt($.$route.query.pid)
    if (pid) {
      $.$store.state.products.map(res => {
        if (res.id === pid) {
          $.photo.active = 0
          $.photo.src = res.photo[0]
          $.$store.commit('bindProduct', res)
        }
      })
    }
  },
  methods: {
    nextPhoto () {
      const $ = this
      let active = $.photo.active + 1
      if (active < $.$store.state.selectedProduct.photo.length) {
        $.photo.active = active
        $.photo.src = $.$store.state.selectedProduct.photo[active]
      } else {
        $.photo.active = 0
        $.photo.src = $.$store.state.selectedProduct.photo[0]
      }
    }
  }
}
</script>

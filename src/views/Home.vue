<template>
  <div class="container">
    <input class="search" type="text" v-model="search">
    <div class="inner">
      <router-link v-for="(p, i) in result" :key="i" :to="{name: 'productView', query: { pid: p.id }}" class="list-result">
        <span class="list-result-price">{{ p.price | currency }}</span>
        <div class="list-result-name" v-html="hlResult(p.name)"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      search: '',
      result: []
    }
  },
  mounted () {
    const $ = this
    $.result = $.$store.state.products
  },
  methods: {

    /* Highlight Result */
    hlResult (str) {
      const $ = this
      const regex = new RegExp($.search, 'gi')
      return str.replace(regex, function (res) {
        return '<span class="hl">' + res + '</span>'
      })
    }

  },
  watch: {

    /* Typing Search - Watcher */
    'search': function (v) {
      const $ = this
      const regex = new RegExp(v, 'gi')
      $.result = $.$store.state.products.filter(res => res.name.match(regex))
    }

  }
}
</script>

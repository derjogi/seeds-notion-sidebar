<template>
  <sidebar-menu :menu="menu" />
  <router-view/>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          header: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Home',
          icon: 'fa fa-user'
          // external: true,
          // exact: true // apply active class when current route is exactly the same. (based on route records, query & hash are not relevant)
        },
        {
          href: '/about',
          title: 'About',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>

<template>
  <div class="google-map">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as GoogleMapsLoader from 'google-maps'

  export default {
    name: 'google-map',

    computed: mapGetters({
      config: 'config'
    }),

    mounted () {
      GoogleMapsLoader.KEY = this.config.googleMaps.apiKey

      GoogleMapsLoader.load((google) => {
        /* eslint-disable no-new */
        let map = new google.maps.Map(this.$el, {
          center: new google.maps.LatLng(22.307492, 114.195331),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })

        new google.maps.Marker({
          position: {lat: 22.327492, lng: 114.195331},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red14.png'
        })

        new google.maps.Marker({
          position: {lat: 22.336461, lng: 114.1654895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red10.png'
        })

        new google.maps.Marker({
          position: {lat: 22.336461, lng: 114.2054895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red30.png'
        })

        new google.maps.Marker({
          position: {lat: 22.356461, lng: 114.2054895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red48.png'
        })

        new google.maps.Marker({
          position: {lat: 22.256461, lng: 114.2054895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red32.png'
        })

        new google.maps.Marker({
          position: {lat: 22.256461, lng: 114.1554895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red67.png'
        })

        new google.maps.Marker({
          position: {lat: 22.236461, lng: 114.1554895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red67.png'
        })

        new google.maps.Marker({
          position: {lat: 22.236461, lng: 114.1854895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red27.png'
        })

        new google.maps.Marker({
          position: {lat: 22.246461, lng: 114.1784895},
          map: map,
          icon: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red47.png'
        })
      })
    }
  }
</script>

<style lang="scss">
  .google-map {
    height: 100%;
  }
</style>

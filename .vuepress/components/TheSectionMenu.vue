<template>
  <div class="section-menu">
    <a class="section-menu-item" v-for="section in sections" :href="section.link" >
      <div class="section-menu-item__bar"></div>
      <h1 class="section-menu-item__title">{{ section.title }}</h1>
      <p class="section-menu-item__text">{{ section.description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sections: [
        {
          title: 'Quickstart',
          description: 'Get Devsync running and learn the basic controls.',
          link: '/quickstart'
        },
        {
          title: 'Troubleshooting',
          description: 'Find out what is wrong, probably sourcemaps.',
          link: '/troubleshooting'
        },
        {
          title: 'Compatibility',
          description: 'Check compatibility status and common problems.',
          link: '/compatibility'
        },
        {
          title: 'Contact',
          description: 'Didn\'t find what you were looking for?',
          link: 'https://devsync.co'
        },
      ]
    }
  }

}
</script>

<style lang="scss">
.section-menu {
  display: flex;
  flex-wrap: wrap;
  margin: 10px -10px;
}

.section-menu-item {
  flex-basis: 340px;
  padding: 10px;
  flex-grow: 1;
  color: inherit;

  &__bar {
    width: 100%;
    height: 7px;
  }


  &__title {
    margin: .2em 0;
    font-size: 1.5rem;
  }

  &__text {
    margin: .4em 0;
  }

  &:nth-child(1) .section-menu-item__bar {
    background-color: #70DABC
  }

  &:nth-child(2) .section-menu-item__bar {
    background-color: #F74C71
  }

  &:nth-child(3) .section-menu-item__bar {
    background-color: #FFA75F
  }

  &:nth-child(4) .section-menu-item__bar {
    background-color: #5FE4FF
  }
}

</style>
<template>
  <header
    :class="{ mobile: mobileMode, 'burger-open': isBurgerOpen }"
    class="header flex h-12 bg-blue pin-t pin-r pin-l fixed z-10">
    <burger
      :opened="isBurgerOpen"
      class="burger-container mr-2 mt-2" @click.native="handleBurgerClick"
      />
    <div class="menu-container" ref="menuContainer">
      <ul class="menu-list bg-blue flex w-full h-full pl-0" @click="handleNavClick">
        <li class="menu-item"><router-link to="/">Home</router-link></li>
        <li class="menu-item"><router-link to="/about">About</router-link></li>
        <li class="menu-item"><router-link to="/contacts">Contacts</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import Burger from '@/components/Burger'
import screenService from '@/services/screen'

export default {
  name: 'Header',
  components: {
    Burger
  },
  data() {
    return {
      mobileMode: true,
      isBurgerOpen: false
    }
  },
  beforeMount() {
    screenService.onResize(this.handleResize)
    window.document.addEventListener(
      'click',
      event => {
        if (!this.$refs.menuContainer.contains(event.target)) {
          this.isBurgerOpen = false
        }
      },
      false
    )
  },
  methods: {
    handleResize(width, displayTypes) {
      this.mobileMode = displayTypes.small || displayTypes.xsmall
      this.isBurgerOpen = false
    },
    handleBurgerClick() {
      if (this.isBurgerOpen) {
        return
      }
      setTimeout(() => {
        this.isBurgerOpen = true
      }, 50)
    },
    handleNavClick(event) {
      if (event.target.tagName === 'A') {
        this.isBurgerOpen = false
      }
    }
  }
}
</script>

<style scoped>
.burger-open .menu-container {
  right: 0;
}

.menu-container {
  transition: right 0.3s;
}

.menu-container,
.menu-list {
  width: 100%;
}

.menu-list {
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.menu-item {
  list-style: none;
}

.router-link-exact-active {
  color: white;
}

a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.burger-container {
  display: none;
  cursor: pointer;
  z-index: 1000;
}

svg {
  fill: #2c3e50;
}

@media (max-width: 768px) {
  .header {
    justify-content: flex-end;
  }

  .burger-container {
    display: inline-block;
  }

  .menu-container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -75%;
    width: 75%;
    display: block;
  }

  .menu-list {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-item {
    padding: 15px 0;
  }
}
</style>

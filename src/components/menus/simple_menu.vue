<template>
  <div>
    <ul class="menu__list">
      <li 
        class="menu__item" 
        v-for="(item, index) in menu_items" 
        :key="index"
        @click="on_click($event, index)">        
        <router-link :to="item.href">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import styles from "./header.module.css";
export default {
  name: "SimpleMenu",
  props: {
    menu_items: Array,
  },
  methods:{
    on_click(event, index){
      let tgt = event.target
      let prnt = tgt.parentNode
      for (let item of prnt.children){
        item.classList.remove('sel')
      }
      tgt.classList.add('sel') 
      // this.$store.commit('set_page', index)
      // console.log(this.$store.state.n_page)      
    }
  },
  created() {
    console.log(this.menu_items);
  },
};
</script>
<style scoped>
.menu__list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  display: grid;
  grid-auto-flow: column;
  column-gap: 8px;
}
.menu__item {
  
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.menu__item.sel {
  background: burlywood;
}
</style>
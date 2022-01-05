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
    }
  },
  created() {
    console.log(this.menu_items);
  },
};
</script>
<style scoped>
@import "/styles/simple-menu.css";
</style>
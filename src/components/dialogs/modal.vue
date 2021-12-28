<template>
  <transition name="modal-fade">
    <div class="modal__backdrop" @keyup.esc="close">
      <div class="modal__dialog"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"        
      >
        <header
          class="modal__header"
          id="modalTitle"
          @mousedown="on_mouse_down"
        >
        <div style="order: 0;">
          <slot name="sign"></slot>
        </div>
        <div class="modal__header__title">
          <slot name="header">
            This is the default tile!
          </slot>
        </div>
        <div style="order: 2; ">
          <button
            type="button"
            class="modal__btn__close"
            @click="close"
            aria-label="Close modal"
          >
          <img class="modal__btn__close__img" src="images/close_black_24dp.svg">
          </button>
        </div>
        </header>
        <section
          class="modal__body"
          id="modalDescription"
        >
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
        <footer class="modal__footer">
          <slot name="footer">
            I'm the default footer!
            <button
              type="button"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<!-- ******************************************************** -->
<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
// window moving function
      on_mouse_down(event) { 
        let e = event || window.event;
        let tgt=e.target
        let prnt = tgt;
        for (let i = 0; i<10 ; i++){
          prnt = prnt.parentNode
          if (prnt.classList.contains('modal__dialog')) break;
        }
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = ()=>{
          tgt.style.cursor='';
          document.onmousemove = null;
          document.onmouseup = null;
        };
        document.onmousemove = (e)=> {
          e = e || window.event;
          let X=e.clientX>10 ? e.clientX: 10;
          if (X>prnt.parentNode.clientWidth -27) return;
          let Y=e.clientY>10 ? e.clientY: 10;
          if (e.clientY>prnt.parentNode.clientHeight - 27) return;
          tgt.style.cursor='move';     
          pos1 = pos3 - X;
          pos2 = pos4 - Y;
          pos3 = X;
          pos4 = Y;
          prnt.style.top = (prnt.offsetTop - pos2) + "px";
          prnt.style.left = (prnt.offsetLeft - pos1) + "px";
        };
      },
      on_escape_press(event){
          if (event.code=='Escape') this.close()
      }
    },
    created: function() {
      window.addEventListener('keydown',this.on_escape_press);
    },
    destroyed: function() {
      window.removeEventListener('keydown', this.on_escape_press);
    },
  };
</script>
<style>
  @import "/styles/modal-dialog.css"
</style>
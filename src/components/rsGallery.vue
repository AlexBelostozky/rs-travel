<template>
  <div class="rsGallery">
    <div class="rsGallery__wrapper">
      <ul
        class="rsGallery__photos-list"
        :style="{
          // eslint-disable-next-line prettier/prettier
          transform: 'translateX(' + (- this.sliderCount * this.slideWidth) + 'px)',
        }"
      >
        <li
          class="rsGallery__photos-item"
          v-for="photo in $store.state.gallery.photos"
          :key="photo"
        >
          <img
            class="rsGallery__photo"
            :src="require(`@/assets/images/content/${photo.full}`)"
            alt=""
            width="819"
          />
        </li>
      </ul>
    </div>
    <nav class="rsGallery__nav">
      <button
        class="rsGallery__button rsGallery__button--prev"
        type="button"
        @click="onPrevButtonClick()"
      >
        &lt; Назад
      </button>

      <button
        class="rsGallery__button rsGallery__button--next"
        type="button"
        @click="onNextButtonClick()"
      >
        Вперёд &gt;
      </button>
    </nav>

    <button
      class="rsGallery__button rsGallery__button--close"
      type="button"
      @click="onCloseButtonClick()"
    >
      Закрыть
    </button>
  </div>
</template>

<script>
export default {
  name: "rsGallery",
  components: {},
  data() {
    return {
      pageBody: null,
      slider: null,
      slide: null,
      sliderCount: 0,
      sliderCards: null,
      slideWidth: null,
    };
  },

  mounted() {
    this.initGallery();
  },

  unmounted() {
    this.uninitGallery();
  },

  methods: {
    initGallery() {
      this.pageBody = document.querySelector("body");
      this.slider = document.querySelector(".rsGallery__wrapper");
      this.sliderWidth = this.slider.offsetWidth;
      this.slide = document.querySelector(".rsGallery__photos-item");
      this.slideWidth = this.slide.offsetWidth;
      this.sliderCards = document.querySelectorAll(".rsGallery__photos-item");

      this.pageBody.style = "overflow: hidden;";
      this.sliderCount = this.$store.state.gallery.photos.findIndex(
        (obj) => obj.full === this.$store.state.gallery.selectedPhoto
      );
      document.addEventListener("keydown", this.onGalleryKeydown);
    },

    uninitGallery() {
      this.pageBody.style = "";
      document.removeEventListener("keydown", this.onGalleryKeydown);
    },

    onCloseButtonClick() {
      this.closeGallery();
    },

    closeGallery() {
      let newGalleryState = {};

      newGalleryState.showGallery = false;
      newGalleryState.photos = {};
      newGalleryState.selectedPhoto = "";

      this.$store.commit("updateGalleryState", newGalleryState);
    },

    onGalleryKeydown(evt) {
      if (this.isEscKeyPressed(evt)) {
        evt.preventDefault();

        this.closeGallery();
      }
    },

    isEscKeyPressed(evt) {
      return evt.key === "Escape";
    },

    onNextButtonClick() {
      this.sliderCount++;

      if (this.sliderCount >= this.sliderCards.length) {
        this.sliderCount = 0;
      }
    },

    onPrevButtonClick() {
      this.sliderCount--;

      if (this.sliderCount <= 0) {
        this.sliderCount = this.sliderCards.length - 1;
      }
    },
  },
};
</script>

<style lang="less">
@import "../assets/globalStyles/styles.less";

.rsGallery {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  z-index: 1;
}

.rsGallery__wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 879px;
  margin: auto;
  overflow: hidden;
}

.rsGallery__photos-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

.rsGallery__photos-item {
  min-width: 879px;
}

.rsGallery__photo {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.rsGallery__nav {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.rsGallery__button {
  font-family: "KievitPro", "Arial", sans-serif;
  font-size: 16px;
  border: none;
  background-color: transparent;
  color: @white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-shadow: 0 2px 10px @light-black;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
    text-decoration-color: @red;
    text-decoration-thickness: 2px;
    text-underline-offset: 5px;
  }

  &:active {
    text-shadow: 0 0 0px @light-black;
    transform: translateY(1px);
  }
}

.rsGallery__button--close {
  position: absolute;
  top: 100px;
  left: 30px;
}
</style>

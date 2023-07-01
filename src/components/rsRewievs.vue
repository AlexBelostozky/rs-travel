<template>
  <section class="rsRewievs">
    <h2 class="rsRewievs__title">Отзывы о Барселоне</h2>

    <div class="rsRewievs__list-wrapper">
      <ul
        class="rsRewievs__list"
        :style="{
          // eslint-disable-next-line prettier/prettier
          transform: 'translateX(' + (- this.sliderCount * this.slideWidth + this.centerOffset * this.centerOffsetNeed + this.endOffset * this.endOffsetNeed) + 'px)',
        }"
      >
        <rsRewiev
          v-for="rewiev in $store.state.rewievsData"
          :key="rewiev.id"
          :rewievData="rewiev"
        />
      </ul>
    </div>

    <div class="rsRewievs__control-wrapper">
      <a class="rsRewievs__button" href="#">Все отзывы</a>

      <nav class="rsRewievs__pagination">
        <ul class="rsRewievs__pagination-list">
          <li
            class="rsRewievs__pagination-item"
            v-for="rewiev in $store.state.rewievsData"
            :key="rewiev.id"
          >
            <label
              class="rsRewievs__pagination-item-control"
              @click="onPaginationButtonClick(rewiev.id)"
            >
              <input
                class="rsRewievs__pagination-item-control-input"
                type="radio"
                name="slide-to-show"
              />

              <span class="rsRewievs__pagination-item-control-mark"></span>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import rsRewiev from "../components/rsRewiev.vue";

export default {
  name: "rsRewievs",
  components: {
    rsRewiev,
  },
  data() {
    return {
      slider: null,
      sliderCount: 0,
      slideWidth: 320,
      sliderWidth: null,
      sliderLineWidth: null,
      slidesGap: null,
      slidesAmount: null,
      centerOffset: null,
      centerOffsetNeed: 0,
      endOffset: null,
      endOffsetNeed: 0,
    };
  },
  mounted() {
    this.initSlider();
  },
  methods: {
    initSlider() {
      // eslint-disable-next-line prettier/prettier
      const paginationButtons = document.querySelectorAll(".rsRewievs__pagination-item-control-input");
      this.slider = document.querySelector(".rsRewievs__list-wrapper");
      const sliderLine = document.querySelector(".rsRewievs__list");
      const slide = document.querySelector(".rsRewiev");

      this.slidesAmount = this.$store.state.rewievsData.length;
      this.sliderWidth = this.slider.offsetWidth;
      this.sliderLineWidth = sliderLine.scrollWidth;
      this.slideWidth = slide.offsetWidth;
      // eslint-disable-next-line prettier/prettier
      this.slidesGap = (this.sliderLineWidth - this.slideWidth * this.slidesAmount) / (this.slidesAmount - 1);

      paginationButtons[this.sliderCount].checked = true;
      this.slider.classList.add("rsRewievs__list-wrapper--sadowed-right");

      // eslint-disable-next-line prettier/prettier
      this.endOffset = this.sliderWidth - (this.slideWidth + this.slidesGap * (this.slidesAmount - 1));
      // console.log(this.$store.state.rewievsData.length);
    },

    onPaginationButtonClick(order) {
      this.sliderCount = order;

      switch (order) {
        case 0:
          this.centerOffsetNeed = 0;
          this.endOffsetNeed = 0;
          this.slider.classList.add("rsRewievs__list-wrapper--sadowed-right");
          this.slider.classList.remove("rsRewievs__list-wrapper--sadowed-left");
          break;

        case this.slidesAmount - 1:
          this.centerOffsetNeed = 0;
          this.endOffsetNeed = 1;
          // eslint-disable-next-line prettier/prettier
          this.slider.classList.remove("rsRewievs__list-wrapper--sadowed-right");
          this.slider.classList.add("rsRewievs__list-wrapper--sadowed-left");
          break;

        default:
          this.centerOffsetNeed = 1;
          this.endOffsetNeed = 0;
          // eslint-disable-next-line prettier/prettier
          this.centerOffset = this.sliderWidth / 2 - (this.slideWidth + this.slidesGap) / 2 - this.slidesGap * (order - 1);
          this.slider.classList.add("rsRewievs__list-wrapper--sadowed-right");
          this.slider.classList.add("rsRewievs__list-wrapper--sadowed-left");
          break;
      }
    },
  },
};
</script>

<style lang="less">
@import "../assets/globalStyles/styles.less";

.rsRewievs {
  box-sizing: border-box;
  width: 100%;
  background-color: @white;
  margin-bottom: 20px;
  padding: 35px 30px;
}

.rsRewievs__title {
  font-size: 29px;
  line-height: 35px;
  letter-spacing: 0.87px;
  margin: 0;
  margin-bottom: 21px;
  word-break: break-word;
}

.rsRewievs__list-wrapper {
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
}

.rsRewievs__list-wrapper--sadowed-left {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    box-shadow: inset 15px 0 20px -20px rgba(0, 0, 0, 0.3);
  }
}

.rsRewievs__list-wrapper--sadowed-right {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    right: 0; /* Тень на правой стороне контейнера */
    box-shadow: inset -15px 0px 20px -20px rgba(0, 0, 0, 0.3);
  }
}

.rsRewievs__list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.2s ease-in-out;
}

.rsRewievs__control-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rsRewievs__button {
  display: block;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 500;
  line-height: 17px;
  color: @black;
  text-align: center;
  text-decoration: none;
  min-width: 124px;
  max-width: 200px;
  min-height: 40px;
  border: 2px solid @red;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: @white;
    background-color: @red;
    border-color: @red;
    outline: none;
  }

  &:active {
    color: @white;
    background-color: @dark-red;
    border-color: @dark-red;
  }
}

.rsRewievs__pagination-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.rsRewievs__pagination-item-control {
  display: block;
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.rsRewievs__pagination-item-control-input {
  display: none;

  &:hover + .rsRewievs__pagination-item-control-mark,
  &:focus + .rsRewievs__pagination-item-control-mark {
    width: 8px;
    height: 8px;
    outline: none;
  }

  &:active + .rsRewievs__pagination-item-control-mark {
    width: 4px;
    height: 4px;
  }

  &:checked + .rsRewievs__pagination-item-control-mark {
    width: 8px;
    height: 8px;
    background-color: @red;
  }
}

.rsRewievs__pagination-item-control-mark {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 4px;
  height: 4px;
  background-color: @light-black;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}
</style>

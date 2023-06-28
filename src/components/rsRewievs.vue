<template>
  <section class="rsRewievs">
    <h2 class="rsRewievs__title">Отзывы о Барселоне</h2>

    <ul class="rsRewievs__list">
      <rsRewiev />
    </ul>

    <div class="rsRewievs__control-wrapper">
      <a class="rsRewievs__button" href="#">Все отзывы</a>

      <nav class="rsRewievs__pagination">
        <ul class="rsRewievs__pagination-list">
          <li class="rsRewievs__pagination-item">
            <label class="rsRewievs__pagination-item-control">
              <input
                class="rsRewievs__pagination-item-control-input"
                type="radio"
                name="slide-to-show"
                value="1"
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
}

.rsRewievs__list {
  position: relative;
  display: flex;
  overflow: hidden;
  list-style: none;
  margin: 0;
  margin-bottom: 32px;
  padding: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px; /* Задайте необходимую ширину для тени */
    z-index: 1; /* Установите значение z-index для тени */
  }

  &::before {
    left: 0; /* Тень на левой стороне контейнера */
    box-shadow: inset 15px 0 20px -20px rgba(0, 0, 0, 0.3); /* Установите параметры тени */
  }

  &::after {
    right: 0; /* Тень на правой стороне контейнера */
    box-shadow: inset -15px 0px 20px -20px rgba(0, 0, 0, 0.3); /* Установите параметры тени */
  }
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

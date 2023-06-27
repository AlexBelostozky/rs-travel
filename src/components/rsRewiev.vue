<template>
  <li class="rsRewiev">
    <figure class="rsRewiev__container">
      <div class="rsRewiev__author">
        <img
          class="rsRewiev__author-avatar"
          src="#"
          srcset="# 2x"
          alt="Аватар"
          width="30"
          height="30"
        />

        <figcaption class="rsRewiev__author-name">Наталия Полянская</figcaption>
      </div>

      <a class="rsRewiev__link" href="#">
        <h3 class="rsRewiev__heading">
          <span class="rsRewiev__city">Барселона</span>
          –
          <span class="rsRewiev__theme">О городе</span>:
        </h3>

        <blockquote class="rsRewiev__quote">
          <p class="rsRewiev__quote-text">
            Барселона – моя третья большая любовь, после Вены и Крита. Это
            город, в который я каждый раз возвращаюсь с огромным удовольствием,
            всем рекомендую хоть раз там побывать и осмотреть ...
          </p>
        </blockquote>
      </a>

      <ul class="rsRewiev__photos-list">
        <li class="rsRewiev__photos-item">
          <a class="rsRewiev__photos-link" href="#">
            <img
              class="rsRewiev__photo"
              src="#"
              alt="Фото пользователя о поездке в Берселону"
              width="50"
              height="50"
            />
          </a>
        </li>
      </ul>

      <div class="rsRewiev__meta">
        <time class="rsRewiev__date" datetime="2022-06-27">
          Около 1 года назад
        </time>

        <a class="rsRewiev__comments-link" href="#">
          • <span class="rsRewiev__comments-count">9</span> комментариев
        </a>

        <div class="rsRewiev__likes-wrapper">
          <!-- Для стилизации состояния поставленного лайка добавить модификатор liked -->
          <button class="rsRewiev__likes-button" type="button">
            <span class="visually-hidden">Отметить отзыв как полезнный</span>
            <svg
              class="rsRewiev__likes-button-icon"
              width="14"
              height="16"
              fill="currentColor"
            >
              <use href="../assets/images/icons/stack.svg#like"></use>
            </svg>
          </button>

          <span class="rsRewiev__likes-count">9</span>
        </div>
      </div>
    </figure>
  </li>
</template>

<script>
export default {
  name: "rsRewiev",
};
</script>

<style lang="less">
@import "../assets/globalStyles/styles.less";

.rsRewiev {
  box-sizing: border-box;
  width: 300px;
  height: 410px;
  flex-shrink: 0;
  background-color: @sand;
  margin-right: 20px;
  padding: 26px 12px 26px 19px;
}

.rsRewiev__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  margin: 0;
  padding: 0;
}

.rsRewiev__author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 28px;
}

.rsRewiev__author-name {
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
}

.rsRewiev__link {
  display: block;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: @black;
  text-decoration: none;
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
}

.rsRewiev__heading {
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  color: @light-black;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 12px;
}

.rsRewiev__city {
  font-weight: 500;
  color: @orange;
}

.rsRewiev__quote {
  margin: 0;
  padding: 0;
  text-overflow: ellipsis;
}

.rsRewiev__quote-text {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 15px;
  line-height: 25px;
  margin: 0;
}

.rsRewiev__photos-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: 0;
  margin-bottom: 26px;
  padding: 0;
}

.rsRewiev__photos-item {
  margin: 0;
  margin-right: 5px;
  padding: 0;
}

.rsRewiev__meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto", Arial, sans-serif;
  font-size: 11px;
  line-height: 25px;
  color: @secondary-gray;
  margin-top: auto;
  margin-bottom: 0;
}

.rsRewiev__date {
  margin-right: 11px;
}

.rsRewiev__comments-link {
  color: @secondary-gray;
  text-decoration: none;
}

.rsRewiev__likes-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: min-content;
  margin-left: auto;
  margin-right: 0;
}

.rsRewiev__likes-button {
  position: relative;
  width: 22px;
  height: 22px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  stroke: #a0a0a0;
  color: transparent;

  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.2);
    stroke: @red;
  }

  &:active {
    transform: scale(1.2) rotateZ(10deg);
    transform-origin: 20% 60%;
  }

  &--liked {
    color: @red;
    stroke: @red;
  }
}

.rsRewiev__likes-button-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

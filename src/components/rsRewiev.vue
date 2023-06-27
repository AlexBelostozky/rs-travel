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
            рекомендую хоть раз там побывать и осмотреть ...
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
          <button class="rsRewiev__likes-button" type="button">
            <span class="visually-hidden">Отметить отзыв как полезнный</span>
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

<style lang="less"></style>

<template>
  <section class="rsUserChat">
    <h2 class="rsUserChat__heading">Чат с администратором</h2>

    <div class="rsUserChat__chat-window">
      <header class="rsUserChat__header">
        <img
          class="rsUserChat__addressee-avatar"
          src="#"
          srcset="# 2x"
          alt="Аватар администратора"
          width="44"
          height="44"
        />

        <div class="rsUserChat__addressee-info">
          <h3 class="rsUserChat__addressee-name">Наталия Полянская</h3>

          <p class="rsUserChat__addressee-role">Гид по Баварии, фотограф</p>
        </div>

        <div class="rsUserChat__addressee-rating">
          <span class="visually-hidden">
            Рейтинг:
            <span class="rsUserChat__addressee-rating-value">4</span>
          </span>

          <ul class="rsUserChat__addressee-rating-list">
            <li
              class="rsUserChat__addressee-rating-item rsUserChat__addressee-rating-item--filled"
            >
              <svg
                class="rsUserChat__addressee-rating-icon"
                width="13"
                height="12"
              >
                <use href="../assets/images/icons/stack.svg#star"></use>
                <defs>
                  <linearGradient
                    id="star-gradient"
                    x1="0"
                    y1="12"
                    x2="12.75"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F5A623" />
                    <stop offset="1" stop-color="#F5C723" />
                  </linearGradient>
                </defs>
              </svg>
            </li>

            <li
              class="rsUserChat__addressee-rating-item rsUserChat__addressee-rating-item--filled"
            >
              <svg
                class="rsUserChat__addressee-rating-icon"
                width="13"
                height="12"
                fill="currentColor"
              >
                <use href="../assets/images/icons/stack.svg#star"></use>
              </svg>
            </li>

            <li
              class="rsUserChat__addressee-rating-item rsUserChat__addressee-rating-item--filled"
            >
              <svg
                class="rsUserChat__addressee-rating-icon"
                width="13"
                height="12"
                fill="currentColor"
              >
                <use href="../assets/images/icons/stack.svg#star"></use>
              </svg>
            </li>

            <li
              class="rsUserChat__addressee-rating-item rsUserChat__addressee-rating-item--filled"
            >
              <svg
                class="rsUserChat__addressee-rating-icon"
                width="13"
                height="12"
                fill="currentColor"
              >
                <use href="../assets/images/icons/stack.svg#star"></use>
              </svg>
            </li>

            <li class="rsUserChat__addressee-rating-item">
              <svg
                class="rsUserChat__addressee-rating-icon"
                width="13"
                height="12"
                fill="currentColor"
              >
                <use href="../assets/images/icons/stack.svg#star"></use>
              </svg>
            </li>
          </ul>
        </div>
      </header>

      <!-- <div class="rsUserChat__messages-list-container"> -->
      <ul class="rsUserChat__messages-list">
        <li class="rsUserChat__message">
          <img
            class="rsUserChat__message-avatar"
            src="#"
            srcset="# 2x"
            alt="Аватар администратора"
            width="44"
            height="44"
          />

          <div class="rsUserChat__message-wrapper">
            <p class="rsUserChat__message-text">
              Из достопримечательностей могу предложить обратить внимание на
              вулкан Майон, путешествие запомнится вам надолго хотя бы из-за
              невероятной сложности подъема на него. Поверьте, это стоит того;
              также хотела бы отметить очень важную область исследования
            </p>

            <time class="rsUserChat__message-time" datetime="2023-06-27T18:45">
              Вчера в 18:45
            </time>
          </div>
        </li>

        <li class="rsUserChat__message">
          <img
            class="rsUserChat__message-avatar"
            src="#"
            srcset="# 2x"
            alt="Аватар администратора"
            width="44"
            height="44"
          />

          <div class="rsUserChat__message-wrapper">
            <p class="rsUserChat__message-text">
              Из достопримечательностей могу предложить обратить внимание на
              вулкан Майон, путешествие запомнится вам надолго хотя бы из-за
              невероятной сложности подъема на него. Поверьте, это стоит того;
              также хотела бы отметить очень важную область исследования
            </p>

            <time class="rsUserChat__message-time" datetime="2023-06-27T18:45">
              Вчера в 18:45
            </time>
          </div>
        </li>

        <li class="rsUserChat__message rsUserChat__message--highlighted">
          <img
            class="rsUserChat__message-avatar"
            src="#"
            srcset="# 2x"
            alt="Ваш аватар"
            width="44"
            height="44"
          />

          <div class="rsUserChat__message-wrapper">
            <p class="rsUserChat__message-text">
              Что из себя представляет вулкан? Просто хочу убедиться, что готова
              к такому путешествию.
            </p>

            <time class="rsUserChat__message-time" datetime="2023-06-27T18:46">
              Вчера в 18:46
            </time>
          </div>
        </li>
      </ul>
      <!-- </div> -->

      <form class="rsUserChat__form" action="#">
        <img
          class="rsUserChat__adresser-avatar"
          src="#"
          srcset="# 2x"
          alt="Ваш аватар"
          width="44"
          height="44"
        />

        <label class="visually-hidden" for="new-meessage">
          Введите новое сообщение:
        </label>
        <input
          class="rsUserChat__input"
          type="text"
          name="new-message"
          placeholder="Напишите сообщение..."
          autocomplete="off"
        />

        <button class="rsUserChat__submit-button" type="submit">
          <span class="visually-hidden">Отправить сообщение</span>

          <svg class="rsUserChat__addressee-rating-icon" width="22" height="22">
            <use href="../assets/images/icons/stack.svg#send-message"></use>
          </svg>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
// import rsUserChat from "../components/rsUserChat.vue";
// import rsAdminChat from "../components/rsAdminChat.vue";

export default {
  name: "rsUserChat",
  components: {},
};
</script>

<style lang="less">
@import "../assets/globalStyles/styles.less";

.rsUserChat__heading {
  font-size: 29px;
  line-height: 35px;
  letter-spacing: 0.87px;
  margin: 0;
  margin-bottom: 25px;
}

.rsUserChat__chat-window {
  display: grid;
  grid-template-rows: min-content 496px min-content;
  width: 415px;
  height: 698px;
  background-color: @white;
}

.rsUserChat__header {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 98px;
  padding: 27px 19px 27px 26px;
  box-shadow: 0 1px 1px @base-gray;
}

.rsUserChat__addressee-avatar {
  margin-right: 19px;
  border-radius: 50%;
}

.rsUserChat__addressee-name {
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin: 0;
  margin-bottom: 7px;
}

.rsUserChat__addressee-role {
  position: relative;
  font-size: 13px;
  line-height: 17px;
  color: @red;
  margin: 0;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 10px;
    background-image: url("../assets/images/icons/stack.svg#flag");
  }
}

.rsUserChat__addressee-rating {
  margin-left: auto;
  margin-right: 0;
}

.rsUserChat__addressee-rating-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 78px;
  margin: 0;
  padding: 0;
}

.rsUserChat__addressee-rating-item {
  svg {
    fill: @light-gold;
  }

  &--filled svg {
    fill: url(#star-gradient);
  }
}

.rsUserChat__messages-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  list-style: none;
  overflow: auto;
  scrollbar-width: 3px;
  scrollbar-color: @red;
  margin: 0;
  padding: 0 14px;

  &::-webkit-scrollbar-thumb {
    background: @red;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }
}

.rsUserChat__message {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 26px 15px 12px;

  &--highlighted {
    background-color: @sand;
  }
}

.rsUserChat__message-avatar {
  display: block;
  min-width: 44px;
  height: 44px;
  margin-right: 19px;
  border-radius: 50%;
}

.rsUserChat__message-text {
  line-height: 24px;
  margin: 0;
}

.rsUserChat__message-time {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 25px;
  color: @secondary-gray;
}

.rsUserChat__form {
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 103px;
  width: 100%;
  padding: 26px 19px 28px 26px;
  box-shadow: 0 -1px 1px @base-gray;
}

.rsUserChat__adresser-avatar {
  min-width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 19px;
  align-self: center;
}

.rsUserChat__input {
  flex-grow: 1;
  font-family: "KievitPro", Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  color: @black;
  border: 1px solid @base-gray;
  margin-right: 5px;
  padding: 14px 24px 16px;

  &::placeholder {
    font-family: "KievitPro", Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    color: @accent-gray;
  }

  &:hover {
    border-color: @red;
  }

  &:focus {
    outline: none;
    border-color: @red;
  }
}

.rsUserChat__submit-button {
  align-self: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
}
</style>

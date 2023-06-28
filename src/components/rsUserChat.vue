<template>
  <section class="rsUserChat">
    <h2>Чат с администратором</h2>

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
            <time datetime="2023-06-27T18:45">Вчера в 18:45</time>
          </div>
        </li>

        <li class="rsUserChat__message">
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
            <time datetime="2023-06-27T18:46">Вчера в 18:46</time>
          </div>
        </li>
      </ul>

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
          type="text"
          name="new-message"
          placeholder="Напишите сообщение..."
          autocomplete="off"
        />

        <button type="submit">
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

<style lang="less"></style>

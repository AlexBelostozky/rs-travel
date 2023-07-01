<template>
  <section class="rsUserChat">
    <h2 class="rsUserChat__heading">{{ addresser.chatTitle }}</h2>

    <div class="rsUserChat__chat-window">
      <header class="rsUserChat__header">
        <img
          class="rsUserChat__addressee-avatar"
          :src="require(`@/assets/images/content/${addressee.avatar}`)"
          alt="Аватар администратора"
          width="44"
          height="44"
        />

        <div class="rsUserChat__addressee-info">
          <h3 class="rsUserChat__addressee-name">{{ addressee.name }}</h3>

          <p class="rsUserChat__addressee-role">
            {{ addressee.roleDescription }}
          </p>
        </div>

        <div class="rsUserChat__addressee-rating" v-if="addressee.ratingValue">
          <span class="visually-hidden">
            Рейтинг:
            <span class="rsUserChat__addressee-rating-value">
              {{ addressee.ratingValue }}
            </span>
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

            <!-- Для стилизации заполнения звезды рейтинга добавить модификатор filled -->
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

      <ul
        class="rsUserChat__messages-list"
        :id="'messages-list-' + addresser.id"
      >
        <!-- Для стилизации сообщения отправителя добавить модификатор  highlighted-->
        <li
          class="rsUserChat__message"
          :class="{
            'rsUserChat__message--highlighted':
              message.senderId === addresser.id,
          }"
          v-for="message in $store.state.messages"
          :key="message.date"
        >
          <img
            class="rsUserChat__message-avatar"
            :src="
              require(`@/assets/images/content/user${message.senderId}-avatar.jpg`)
            "
            :alt="
              message.senderId === addresser.id
                ? 'Ваш аватар'
                : 'Аватар адресата'
            "
            width="44"
            height="44"
          />

          <div class="rsUserChat__message-wrapper">
            <p class="rsUserChat__message-text">
              {{ message.text }}
            </p>

            <time class="rsUserChat__message-time" :datetime="message.date">
              {{ formatDate(message.date) }}
            </time>
          </div>
        </li>
      </ul>

      <form class="rsUserChat__form" action="#">
        <img
          class="rsUserChat__adresser-avatar"
          :src="require(`@/assets/images/content/${addresser.avatar}`)"
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
          v-model="messageInput"
        />

        <button
          class="rsUserChat__submit-button"
          type="submit"
          @click.prevent="sendMessage()"
        >
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
import moment from "moment";

export default {
  name: "rsUserChat",
  components: {},
  props: {
    addresser: {
      type: Object,
      default() {
        return {};
      },
    },
    addressee: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      ratingStars: null,
      messageInput: "",
      messagesList: null,
    };
  },

  mounted() {
    this.initUserChat();
  },

  methods: {
    initUserChat() {
      // eslint-disable-next-line prettier/prettier
      this.ratingStars = document.querySelectorAll(".rsUserChat__addressee-rating-item");
      // eslint-disable-next-line prettier/prettier
      this.messagesList = document.getElementById(`messages-list-${this.addresser.id}`);

      this.fillRatingStars();
      this.scrollToLastMessage();
    },

    fillRatingStars() {
      for (let i = 0; i <= this.addressee.ratingValue - 1; i++) {
        // eslint-disable-next-line prettier/prettier
        this.ratingStars[i].classList.add("rsUserChat__addressee-rating-item--filled")
      }
    },

    formatDate(utcDate) {
      const now = moment();
      const date = moment(utcDate);

      // Формат "HH:MM" для сегодняшней даты
      if (date.isSame(now, "day")) {
        return date.format("HH:mm");
      }

      // Формат "Вчера в HH:MM" для предыдущего календарного дня
      if (date.isSame(now.clone().subtract(1, "day"), "day")) {
        return `Вчера в ${date.format("HH:mm")}`;
      }

      // Формат "DD.MM.YY HH:MM" для остальных дат
      return date.format("DD.MM.YY HH:mm");
    },

    sendMessage() {
      const messageDate = new Date().toJSON();
      let newMessage = [];
      const normalizedInput = this.messageInput.trim();

      if (normalizedInput) {
        newMessage = [this.addresser.id, messageDate, this.messageInput];
        this.$store.commit("addNewMessage", newMessage);
        this.messageInput = "";
      } else {
        this.messageInput = "";
      }

      this.scrollToLastMessage();
    },

    scrollToLastMessage() {
      setTimeout(() => {
        this.messagesList.scrollTop = this.messagesList.scrollHeight;
      }, 100);
    },
  },
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
  word-break: break-word;
}

.rsUserChat__chat-window {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
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
  word-break: break-word;
}

.rsUserChat__addressee-role {
  position: relative;
  font-size: 13px;
  line-height: 17px;
  color: @red;
  margin: 0;
  padding-left: 12px;
  word-break: break-word;

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
  word-break: break-word;
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
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 1px solid @red;
  }

  &:active {
    transform: scale(1);
  }
}
</style>

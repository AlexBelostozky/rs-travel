<template>
  <li class="rsRewiev">
    <figure class="rsRewiev__container">
      <div class="rsRewiev__author">
        <img
          class="rsRewiev__author-avatar"
          :src="require(`@/assets/images/content/${rewievData.authorAvatar}`)"
          alt="Аватар"
          width="30"
          height="30"
        />

        <figcaption class="rsRewiev__author-name">
          {{ rewievData.authorName }}
        </figcaption>
      </div>

      <a class="rsRewiev__link" href="#">
        <h3 class="rsRewiev__heading">
          <span class="rsRewiev__city">{{ rewievData.city }}</span>
          –
          <span class="rsRewiev__theme">{{ rewievData.theme }}</span
          >:
        </h3>

        <blockquote class="rsRewiev__quote">
          <p class="rsRewiev__quote-text">
            {{ rewievData.text }}
          </p>
        </blockquote>
      </a>

      <ul class="rsRewiev__photos-list">
        <li
          class="rsRewiev__photos-item"
          v-for="(photo, idx) in getMainRewievPhotos"
          :key="photo"
        >
          <a class="rsRewiev__photos-link" href="#">
            <img
              class="rsRewiev__photo"
              :src="require(`@/assets/images/content/${photo.thumbnail}`)"
              @click.prevent="onThumbnailClick(photo.full, rewievData.photos)"
              alt="Фото пользователя о поездке в Берселону"
              width="50"
              height="50"
            />
          </a>

          <div
            class="rsRewiev__photos-uplimit"
            :class="{
              'rsRewiev__photos-uplimit--show':
                idx + 1 === getMainRewievPhotos.length &&
                this.photosUplimit > 0,
            }"
          >
            <span class="rsRewiev__photos-uplimit-text">
              + {{ this.photosUplimit }}</span
            >
          </div>
        </li>
      </ul>

      <div class="rsRewiev__meta">
        <time class="rsRewiev__date" datetime="2022-06-27">
          {{ formatRewievDate(rewievData.date) }}
        </time>

        <a class="rsRewiev__comments-link" href="#">
          •
          <span class="rsRewiev__comments-count">
            {{ rewievData.commentsCount }}
          </span>
          {{ this.commentsWord }}
        </a>

        <div class="rsRewiev__likes-wrapper">
          <!-- Для стилизации состояния поставленного лайка добавить модификатор liked -->
          <button
            class="rsRewiev__likes-button"
            :class="{ 'rsRewiev__likes-button--liked': rewievData.likeStatus }"
            type="button"
            @click="onLikesButtonClick()"
          >
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

          <span class="rsRewiev__likes-count">
            {{ rewievData.likesCount }}
          </span>
        </div>
      </div>
    </figure>
  </li>
</template>

<script>
import moment from "moment";

export default {
  name: "rsRewiev",
  props: {
    rewievData: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      photosUplimit: 0,
      mainRewievPhotos: [],
      commentsWord: "",
    };
  },

  mounted() {
    this.defineMainRewievPhotos();
    this.getPhotosUplimit();

    this.formatCommentsPhrase();
  },

  computed: {
    getMainRewievPhotos() {
      return this.rewievData.photos.slice(0, 4);
    },
  },

  methods: {
    defineMainRewievPhotos() {
      this.mainRewievPhotos = this.rewievData.photos.slice(0, 4);
    },

    onLikesButtonClick() {
      this.$store.commit("updateLikeStatus", this.rewievData);
    },

    onThumbnailClick(selectedPhotoName, photos) {
      let newGalleryState = {};

      newGalleryState.showGallery = true;
      newGalleryState.photos = photos;
      newGalleryState.selectedPhoto = selectedPhotoName;

      this.$store.commit("updateGalleryState", newGalleryState);
    },

    getPhotosUplimit() {
      // eslint-disable-next-line prettier/prettier
      this.photosUplimit = this.rewievData.photos.length - this.mainRewievPhotos.length;
    },

    formatCommentsPhrase() {
      const count = this.rewievData.commentsCount;
      const lastDigit = count % 10;
      const lastTwoDigits = count % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        this.commentsWord = "комментариев";
      } else if (lastDigit === 1) {
        this.commentsWord = "комментарий";
      } else if (lastDigit >= 2 && lastDigit <= 4) {
        this.commentsWord = "комментария";
      } else {
        this.commentsWord = "комментариев";
      }
    },

    formatRewievDate(date) {
      const now = moment();
      const reviewDate = moment(date);

      if (now.isSame(reviewDate, "day")) {
        return "сегодня";
      } else if (now.clone().subtract(1, "day").isSame(reviewDate, "day")) {
        return "вчера";
      } else if (now.diff(reviewDate, "days") < 7) {
        return `${now.diff(reviewDate, "days")} ${this.pluralize(
          now.diff(reviewDate, "days"),
          ["день", "дня", "дней"]
        )} назад`;
      } else if (now.diff(reviewDate, "days") < 30) {
        return `${now.diff(reviewDate, "weeks")} ${this.pluralize(
          now.diff(reviewDate, "weeks"),
          ["неделя", "недели", "недель"]
        )} назад`;
      } else if (now.diff(reviewDate, "days") < 365) {
        return `${now.diff(reviewDate, "months")} ${this.pluralize(
          now.diff(reviewDate, "months"),
          ["месяц", "месяца", "месяцев"]
        )} назад`;
      } else {
        const yearsAgo = now.diff(reviewDate, "years");
        const monthsAgo = now.diff(reviewDate, "months");
        if (monthsAgo % 12 === 0 && yearsAgo >= 1) {
          return `около ${yearsAgo} ${this.pluralize(yearsAgo, [
            "года",
            "лет",
            "лет",
          ])} назад`;
        } else {
          return `около ${monthsAgo} ${this.pluralize(monthsAgo, [
            "месяца",
            "месяцев",
            "месяцев",
          ])} назад`;
        }
      }
    },

    pluralize(count, words) {
      const cases = [2, 0, 1, 1, 1, 2];
      return words[
        count % 100 > 4 && count % 100 < 20
          ? 2
          : cases[count % 10 < 5 ? count % 10 : 5]
      ];
    },
  },
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

  &:last-child {
    margin-right: 0;
  }
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

.rsRewiev__author-avatar {
  border-radius: 50%;
  margin-right: 10px;
}

.rsRewiev__author-name {
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  word-break: break-word;
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
  word-break: break-word;
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
  word-break: break-word;
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
  position: relative;
  margin: 0;
  margin-right: 5px;
  padding: 0;
}

.rsRewiev__photo {
  display: block;
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.rsRewiev__photos-uplimit {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: @white;
  background-color: rgba(16, 16, 16, 0.4);
  pointer-events: none;

  &--show {
    display: flex;
  }
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
  word-break: break-word;
}

.rsRewiev__comments-link {
  color: @secondary-gray;
  text-decoration: none;
  word-break: break-word;
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
  word-break: break-word;

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

.rsRewiev__likes-count {
  display: block;
  min-width: 15px;
}
</style>

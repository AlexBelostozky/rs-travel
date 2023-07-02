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
          v-for="photo in getMainRewievPhotos"
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
        </li>
      </ul>

      <div class="rsRewiev__meta">
        <time class="rsRewiev__date" datetime="2022-06-27">
          {{ rewievData.date }}
        </time>

        <a class="rsRewiev__comments-link" href="#">
          •
          <span class="rsRewiev__comments-count">
            {{ rewievData.commentsCount }}
          </span>
          комментариев
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
      // showGallery: false,
      // galleryPhotos: [],
      // galleyStartPhoto: "",
    };
  },

  computed: {
    getMainRewievPhotos() {
      return this.rewievData.photos.slice(0, 4);
    },
  },

  methods: {
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

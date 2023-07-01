import { createStore } from "vuex";

export default createStore({
  state: {
    rewievsData: [
      {
        id: 0,
        authorAvatar: "author-avatar.jpg",
        authorName: "Наталия Полянская",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          {
            thumbnail: "rewiev1.jpg",
            full: "rewiev1-thumb.jpg",
          },
          {
            thumbnail: "rewiev2.jpg",
            full: "rewiev2-thumb.jpg",
          },
          {
            thumbnail: "rewiev3.jpg",
            full: "rewiev3-thumb.jpg",
          },
          {
            thumbnail: "rewiev4.jpg",
            full: "rewiev4-thumb.jpg",
          },
          {
            thumbnail: "rewiev5.jpg",
            full: "rewiev5-thumb.jpg",
          },
          {
            thumbnail: "rewiev6.jpg",
            full: "rewiev6-thumb.jpg",
          },
        ],
        date: "около 1 года назад",
        commentsCount: 9,
        likesCount: 9,
        likeStatus: false,
      },
      {
        id: 1,
        authorAvatar: "author-avatar.jpg",
        authorName: "Elena Bulgakova",
        city: "Барселона",
        theme: "О городе",
        text: "Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...",
        photos: [
          {
            thumbnail: "rewiev1.jpg",
            full: "rewiev1-thumb.jpg",
          },
          {
            thumbnail: "rewiev2.jpg",
            full: "rewiev2-thumb.jpg",
          },
          {
            thumbnail: "rewiev3.jpg",
            full: "rewiev3-thumb.jpg",
          },
          {
            thumbnail: "rewiev4.jpg",
            full: "rewiev4-thumb.jpg",
          },
          {
            thumbnail: "rewiev5.jpg",
            full: "rewiev5-thumb.jpg",
          },
          {
            thumbnail: "rewiev6.jpg",
            full: "rewiev6-thumb.jpg",
          },
        ],
        date: "5 месяцев назад",
        commentsCount: 3,
        likesCount: 7,
        likeStatus: false,
      },
      {
        id: 2,
        authorAvatar: "author-avatar.jpg",
        authorName: "Анна Кюри",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          {
            thumbnail: "rewiev1.jpg",
            full: "rewiev1-thumb.jpg",
          },
          {
            thumbnail: "rewiev2.jpg",
            full: "rewiev2-thumb.jpg",
          },
          {
            thumbnail: "rewiev3.jpg",
            full: "rewiev3-thumb.jpg",
          },
          {
            thumbnail: "rewiev4.jpg",
            full: "rewiev4-thumb.jpg",
          },
          {
            thumbnail: "rewiev5.jpg",
            full: "rewiev5-thumb.jpg",
          },
          {
            thumbnail: "rewiev6.jpg",
            full: "rewiev6-thumb.jpg",
          },
        ],
        date: "3 месяца назад",
        commentsCount: 9,
        likesCount: 11,
        likeStatus: false,
      },
    ],
  },
  getters: {},
  mutations: {
    updateLikeStatus(state, updatedRewievData) {
      const rewievId = updatedRewievData.id;

      if (state.rewievsData[rewievId].likeStatus === false) {
        state.rewievsData[rewievId].likeStatus = true;
        state.rewievsData[rewievId].likesCount++;
      } else {
        state.rewievsData[rewievId].likeStatus = false;
        state.rewievsData[rewievId].likesCount--;
      }
    },
  },
  actions: {},
  modules: {},
});

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
            thumbnail: "rewiev1-thumb.jpg",
            full: "rewiev1.jpg",
          },
          {
            thumbnail: "rewiev2-thumb.jpg",
            full: "rewiev2.jpg",
          },
          {
            thumbnail: "rewiev3-thumb.jpg",
            full: "rewiev3.jpg",
          },
          {
            thumbnail: "rewiev4-thumb.jpg",
            full: "rewiev4.jpg",
          },
          {
            thumbnail: "rewiev5-thumb.jpg",
            full: "rewiev5.jpg",
          },
        ],
        date: "2023-07-01T16:43:21.180Z",
        commentsCount: 1,
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
            thumbnail: "rewiev1-thumb.jpg",
            full: "rewiev1.jpg",
          },
          {
            thumbnail: "rewiev2-thumb.jpg",
            full: "rewiev2.jpg",
          },
          {
            thumbnail: "rewiev3-thumb.jpg",
            full: "rewiev3.jpg",
          },
          {
            thumbnail: "rewiev4-thumb.jpg",
            full: "rewiev4.jpg",
          },
          {
            thumbnail: "rewiev5-thumb.jpg",
            full: "rewiev5.jpg",
          },
          {
            thumbnail: "rewiev6-thumb.jpg",
            full: "rewiev6.jpg",
          },
        ],
        date: "2023-06-01T16:43:21.180Z",
        commentsCount: 3,
        likesCount: 7,
        likeStatus: true,
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
            thumbnail: "rewiev1-thumb.jpg",
            full: "rewiev1.jpg",
          },
          {
            thumbnail: "rewiev2-thumb.jpg",
            full: "rewiev2.jpg",
          },
          {
            thumbnail: "rewiev3-thumb.jpg",
            full: "rewiev3.jpg",
          },
        ],
        date: "2023-01-01T16:43:21.180Z",
        commentsCount: 9,
        likesCount: 11,
        likeStatus: false,
      },
      {
        id: 3,
        authorAvatar: "author-avatar.jpg",
        authorName: "Ирина Иванова",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          {
            thumbnail: "rewiev1-thumb.jpg",
            full: "rewiev1.jpg",
          },
          {
            thumbnail: "rewiev2-thumb.jpg",
            full: "rewiev2.jpg",
          },
          {
            thumbnail: "rewiev3-thumb.jpg",
            full: "rewiev3.jpg",
          },
          {
            thumbnail: "rewiev4-thumb.jpg",
            full: "rewiev4.jpg",
          },
          {
            thumbnail: "rewiev5-thumb.jpg",
            full: "rewiev5.jpg",
          },
          {
            thumbnail: "rewiev6-thumb.jpg",
            full: "rewiev6.jpg",
          },
        ],
        date: "2022-08-01T16:43:21.180Z",
        commentsCount: 21,
        likesCount: 22,
        likeStatus: true,
      },
      {
        id: 4,
        authorAvatar: "author-avatar.jpg",
        authorName: "Роксана Харитонович",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          {
            thumbnail: "rewiev1-thumb.jpg",
            full: "rewiev1.jpg",
          },
          {
            thumbnail: "rewiev2-thumb.jpg",
            full: "rewiev2.jpg",
          },
          {
            thumbnail: "rewiev3-thumb.jpg",
            full: "rewiev3.jpg",
          },
          {
            thumbnail: "rewiev4-thumb.jpg",
            full: "rewiev4.jpg",
          },
        ],
        date: "2022-07-01T16:43:21.180Z",
        commentsCount: 14,
        likesCount: 16,
        likeStatus: false,
      },
      {
        id: 5,
        authorAvatar: "author-avatar.jpg",
        authorName: "Johanna Stingray",
        city: "Барселона",
        theme: "О городе",
        text: "Барселона – моя вторая большая любовь, после Кипра. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...",
        photos: [
          {
            thumbnail: "rewiev1-thumb.jpg",
            full: "rewiev1.jpg",
          },
          {
            thumbnail: "rewiev2-thumb.jpg",
            full: "rewiev2.jpg",
          },
          {
            thumbnail: "rewiev3-thumb.jpg",
            full: "rewiev3.jpg",
          },
          {
            thumbnail: "rewiev4-thumb.jpg",
            full: "rewiev4.jpg",
          },
          {
            thumbnail: "rewiev5-thumb.jpg",
            full: "rewiev5.jpg",
          },
          {
            thumbnail: "rewiev6-thumb.jpg",
            full: "rewiev6.jpg",
          },
        ],
        date: "2021-07-01T16:43:21.180Z",
        commentsCount: 5,
        likesCount: 10,
        likeStatus: false,
      },
    ],

    gallery: {
      showGallery: false,
      photos: {},
      selectedPhoto: "",
    },

    users: [
      {
        id: 0,
        role: "admin",
        chatTitle: "Чат с пользователем",
        name: "Администратор Администраторов",
        avatar: "user0-avatar.jpg",
        roleDescription: "Гид по Баварии, фотограф",
        ratingValue: 4,
      },
      {
        id: 1,
        role: "client",
        chatTitle: "Чат с администратором",
        name: "Наталия Полянская",
        avatar: "user1-avatar.jpg",
        roleDescription: "TravelAsk",
      },
    ],

    messages: [
      {
        senderId: 0,
        date: "2023-07-01T16:43:21.180Z",
        text: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотела бы отметить очень важную область исследования",
      },
      {
        senderId: 1,
        date: "2023-07-01T16:45:20.180Z",
        text: "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
      },
      {
        senderId: 0,
        date: "2023-07-01T18:46:01.180Z",
        text: "Просто обычный вулкан как и все остальные. Ничего осебенного. Лучше съешьте ещё этих мягких барселонских булок да выпейте чаю.",
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

    addNewMessage(state, newMessage) {
      state.messages.push({
        senderId: newMessage[0],
        date: newMessage[1],
        text: newMessage[2],
      });
    },

    updateGalleryState(state, newState) {
      state.gallery.showGallery = newState.showGallery;

      if (newState) {
        state.gallery.photos = newState.photos;
        state.gallery.selectedPhoto = newState.selectedPhoto;
      } else {
        state.gallery.photos = {};
        state.gallery.selectedPhoto = "";
      }
    },
  },
  actions: {},
  modules: {},
});

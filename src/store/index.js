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
        commentsCount: 6,
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
      {
        id: 3,
        authorAvatar: "author-avatar.jpg",
        authorName: "Ирина Иванова",
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
        commentsCount: 11,
        likesCount: 15,
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
        commentsCount: 11,
        likesCount: 14,
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
        commentsCount: 13,
        likesCount: 16,
        likeStatus: false,
      },
    ],

    users: [
      {
        id: 0,
        role: "admin",
        chatTitle: "Чат с пользователем",
        name: "Администратор Администраторов",
        roleDescription: "Гид по Баварии, фотограф",
        ratingValue: 4,
      },
      {
        id: 1,
        role: "client",
        chatTitle: "Чат с администратором",
        name: "Наталия Полянская",
        roleDescription: "TravelAsk",
      },
    ],

    messages: [
      {
        senderId: "0",
        date: "2023-06-01T16:43:21.180Z",
        text: "Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. Поверьте, это стоит того; также хотела бы отметить очень важную область исследования",
      },
      {
        senderId: "1",
        date: "2023-06-01T16:45:20.180Z",
        text: "Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.",
      },
      {
        senderId: "1",
        date: "2023-06-01T16:46:01.180Z",
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
  },
  actions: {},
  modules: {},
});

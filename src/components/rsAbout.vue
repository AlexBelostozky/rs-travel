<template>
  <article class="rsAbout">
    <img
      class="rsAbout__image"
      src="../assets/images/content/barcelona.jpg"
      srcset="../assets/images/content/barcelona@2x.jpg 2x"
      alt="Вид на собор Sagrada Familia в Барселоне на фоне неба с облаками, окружённый растительностью"
      width="440"
      height="440"
    />
    <div class="rsAbout__description-wrapper">
      <h2 class="rsAbout__title">Барселона — обзор города</h2>

      <p class="rsAbout__description">
        Барселона с её золотистыми пляжами,<br />
        архитектурными шедеврами Гауди,<br />
        многочисленными фестивалями и <br />
        гастрономическим разнообразием понравилась<br />
        мне в первый же день пребывания и стала<br />
        местом, в котором...
      </p>

      <a class="rsAbout__link" href="#">Читать дальше</a>
    </div>
  </article>
</template>

<script>
export default {
  name: "rsAbout",
};
</script>

<style lang="less">
@import "../assets/globalStyles/styles.less";

.rsAbout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: @white;
  margin-bottom: 20px;
}

.rsAbout__description-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 29px;
}

.rsAbout__title {
  font-size: 29px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0.87px;
  margin: 0;
  margin-bottom: 19px;
  word-break: break-word;
}

.rsAbout__description {
  font-size: 17px;
  font-weight: 300;
  line-height: 25px;
  margin: 0;
  margin-bottom: 6px;
  word-break: break-word;
}

.rsAbout__link {
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
  color: @black;
  text-decoration-thickness: 3px;
  text-decoration-color: @red;
  text-underline-offset: 5px;
  width: fit-content;
  margin: 0;
  transition: all 0.2s ease-in-out;
  word-break: break-word;

  &:hover,
  &:focus {
    text-underline-offset: 7px;
  }

  &:active {
    color: @red;
  }
}
</style>

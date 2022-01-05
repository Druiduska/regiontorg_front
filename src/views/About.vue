<template>
  <div class="about">
    <h1>Тестовое задание</h1>
    <h2>Барабошкин Олег Васильевич</h2>
    <h2>ЭТП "РегионТорг".</h2>
    <div class="div__exams">
      <ul class="ul__exams">
        <li class="li__exams">
          Главная страница со списком записей (например, новости)
        </li>
        <li class="li__exams">
          На каждую новость можно кликнуть и перейти на страницу с полным
          описание новости.
        </li>
        <li class="li__exams">
          Записи можно удалить, редактировать, или создать.
        </li>
        <li class="li__exams">
          Данные с записями можно хранить в data в виде массива или, по желанию,
          использовать vuex.
        </li>
        <li class="li__exams">
          Страница редактирования, создания должны быть как отдельные
          компоненты. Естественно, если отредактировать запись, то данные должны
          сразу обновиться. Если удалить запись то тоже самое.
        </li>
        <li class="li__exams">Можно использовать пропсы.</li>
        <li class="li__exams">
          Готовые проект выгрузить на гитхаб или гитлаб.
        </li>
      </ul>
    </div>    
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
<style scoped>
.div__exams {
  display: flex;
  justify-content: center;
}
.ul__exams {
  text-align: left;
}
.li__exams {
  width: 50rem;
}
</style>
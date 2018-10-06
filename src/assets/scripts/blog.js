import "./modules/hamburger";
import "./modules/footer";
import "./modules/blog-menu";

const items = document.querySelectorAll('.blog-menu__item');
const btns = document.querySelectorAll('.blog-menu__btn');
const posts = document.querySelectorAll('.post');

//Находим все кнпоки меню
for (let i = 0; i < btns.length; i++) {
  const button = btns[i];

  button.onclick = function () {
    //При клике на кнопку определяем data id и родительский элемент,
    //Удаляем все активные элементы у списков и добавляем активный класс по клику
    let data_id = this.dataset.id;
    let parent = this.parentNode;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.classList.remove("blog-menu__item--active");
    }
    parent.classList.add("blog-menu__item--active");
    //Находим все посты, если data id совпадает, то скролим до нужного поста
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      let postHeight = post.clientHeight;
      if (post.dataset.id === data_id) {
        // console.log(post.offsetTop + " Позиция поста");
        // window.onscroll = function () {
        //   console.log(postPosition);

        // }
        window.scrollTo({
          //определяем top поста и высоту поста
          //Складываем и прокручиваем
          top: post.offsetTop + postHeight,
          behavior: "smooth"
        })
      }
    }
  }
}

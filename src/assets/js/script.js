

function fadeAnim() {
  // Intersection Observerのオプションを設定
  const options = {
    threshold: 0.2  // 要素が画面内の30%に入った時点でclassを付与
  };

  // targetの要素とその処理を一括で行う関数
  function observeFadeAnimation(targetClass, animationClass) {
    // 要素を取得
    const elements = document.querySelectorAll(targetClass);

    // Intersection Observerのcallbackを定義
    const callback = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {  // 要素が画面内に入ったら
          entry.target.classList.add(animationClass);
        }
      });
    };
    // Intersection Observerを作成
    const observer = new IntersectionObserver(callback, options);
    // 要素に対してobserverを適用
    elements.forEach(function (element) {
      observer.observe(element);
    });
  }
  observeFadeAnimation('.target-fadeAnim', 'fadeAnim');
  observeFadeAnimation('.target-fadeUpAnim', 'fadeUpAnim');
  observeFadeAnimation('.target-fadeLeftAnim', 'fadeLeftAnim');
  observeFadeAnimation('.target-fadeRightAnim', 'fadeRightAnim');
}



function checkPosition() {
  // ページトップのスクロール位置を取得
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // 特定の要素の位置を取得
  const header = document.querySelector('header');
  const about = document.querySelector('#about');
  const diary = document.querySelector('#diary');
  const sns = document.querySelector('#sns');
  const aboutTop = about.offsetTop;
  const diaryTop = diary.offsetTop;
  const snsTop = sns.offsetTop;

  if (scrollTop > aboutTop - 350 ) {
    header.classList.add('overAbout');
  } else {
    header.classList.remove('overAbout');
  }
}



// 実行
window.addEventListener('scroll', function(){
  checkPosition();
});

window.addEventListener('DOMContentLoaded', function () {
  // callParts();
  // Slider();
  fadeAnim();
});
// 传统对象写法
// function TypeWriter(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;  // 单词数组
//   this.wordIndex = 0;  // 单词在数组中的索引
//   this.txt = '';  //  当前显示的单词
//   this.wait = parseInt(wait);  // 等待事件
//   this.isDeleting = false;  // 是否删除
//   this.type();  // 这句必须要，目的是在用new关键字调用构造函数时，调用type函数
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;  // *
//   // Get full text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if (this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);  // *
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);  // *
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;  // * ES6

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

// ES6的Class写法
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;  // 单词数组
    this.wordIndex = 0;  // 单词在数组中的索引
    this.txt = '';  //  当前显示的单词
    this.wait = parseInt(wait);  // 等待事件
    this.isDeleting = false;  // 是否删除
    this.type();    
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;  // *
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);  // *
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);  // *
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;  // * ES6

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;  // 删除字的时候加快打字速度
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;  // 打完一个完整单词后，等待一段时间
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);  // 不停循环调用
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
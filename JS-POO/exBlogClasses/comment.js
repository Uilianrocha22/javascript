class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.createdAt = new Date();
  }
}
module.exports = Comment;

// const data = new Date();
// const dataFormat = `${data.getDate()}/${
//   data.getMonth() + 1
// }/${data.getFullYear()}`;
// console.log(dataFormat);

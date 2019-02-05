function Container(id, className, tagName) {
    // if(!['div', 'ul', 'li', 'a'].includes(tagName)) {
    //     // Ошибка
    // }
    this.id = id;
    this.class = className;
    this.tagName = tagName;
}
// объявление пуличного метода для класса Container
Container.prototype.render = function() {
    var wrapper = document.createElement(this.tagName);
    wrapper.id = this.id;
    wrapper.className = this.class;
    return wrapper;
}
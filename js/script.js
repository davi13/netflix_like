const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
//Select Tab Content Item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from Dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    console.log(this.id);
    //add show class
    tabContentItem.classList.add('show');

}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}
//listen for Tab Item click
tabItems.forEach(item => item.addEventListener('click', selectItem));
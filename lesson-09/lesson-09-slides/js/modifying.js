let menuItems = document.getElementsByClassName('item');
console.log(menuItems);
for (let i = 0; i < menuItems.length; i++) {
    let item = menuItems.item(i);
    item.innerHTML = "Hello World";
    console.log(item);
}
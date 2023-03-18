const liItemEl = document.querySelectorAll('.item');
console.log('Number of categories:', liItemEl.length);

liItemEl.forEach(el => {
    console.log(`Category:`, el.firstElementChild.textContent)
    console.log(`Elements:`, el.lastElementChild.children.length)
});


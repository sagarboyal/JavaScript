let colorParagraph = document.getElementById('colorCode');
colorParagraph.textContent = "Test";

document.getElementById('colorButton').onclick = function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    colorParagraph.textContent = randomColor;
};
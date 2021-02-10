document.onclick = function() {

    import('./b.js').then(data => {
        console.log(data.x, data.y, data.default)
    });

}
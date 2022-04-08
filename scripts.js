
(async () => {
    fetch()
        .then(data => data.json())
        .then(json => console.log(json))
})();

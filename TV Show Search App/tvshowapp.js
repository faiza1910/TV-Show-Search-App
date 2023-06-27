const form = document.querySelector('#searchFrom');
form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, { params: { q: searchTerm }});
    displayImages(res.data)
    form.elements.query.value='';
})

const displayImages = (shows) =>{
    for (let result of shows){
        if (result.show.image){
            const img = document.createElement('IMG');
            img.src= result.show.image.medium;
            document.body.append(img)
        }
        
     
    }
}
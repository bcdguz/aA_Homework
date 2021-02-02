
export const fetchSearchGiphys = (searchTerm) => {
    return $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=x1oYNz9Lwv9hcYShdzXwnHXv30DJAB6x&limit=2`
    })
}
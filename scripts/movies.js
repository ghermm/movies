"use strict";
var movies = [];
function addMovie(movie) {
    movies.push(movie);
}
function getMovies() {
    return movies;
}
function getSearchedMovies(filter) {
    var filteredMovies = [];
    movies.forEach(function (movie) {
        // @ts-ignore
        if (movie.name.toLowerCase().includes(filter.toLowerCase())) {
            filteredMovies.push(movie);
        }
    });
    return filteredMovies;
}
function search(filtered) {
    filtered.forEach(function (movie) {
        document.getElementById("movies").insertAdjacentHTML("beforeend", "<li class='movie'></li>");
        var element = (document.getElementsByClassName("movie")[document.getElementsByClassName("movie").length - 1]);
        var imageUrl = getImage(movie.name);
        var img = new Image();
        element.style.setProperty('--movieTitle', "\"" + movie.name + "\"");
        img.src = imageUrl;
        img.onload = function () {
            element.style.backgroundImage = 'url(' + imageUrl + ')';
        };
        element.addEventListener('click', function () { return playMovie(movie.link); });
    });
}
function playMovie(movieLink) {
    var wrapper = document.getElementById("wrapper");
    if (!wrapper)
        return;
    wrapper.style.visibility = "visible";
    wrapper.innerHTML = '<iframe id="movie" allowfullscreen webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
    document.getElementById("movie").src = movieLink;
}
function getImage(movieTitle) {
    return "images/thumbnails/" + movieTitle.toLowerCase().replaceAll(' ', '-').replaceAll(':', '').replaceAll("'", '') + ".webp";
}
document.getElementById("wrapper").onclick = function (evt) {
    evt.target.style.visibility = "hidden";
    document.getElementById("wrapper").innerHTML = '<iframe id="movie" allowfullscreen webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>';
};
document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement) {
        document.getElementById("movie").style.outlineColor = "rgba(0, 0, 0, 0)";
    }
    else {
        document.getElementById("movie").style.outlineColor = "rgba(255, 255, 255, 0.15)";
    }
});
addMovie({
    description: "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
    genres: ["Action", "Comedy", "Crime"],
    link: "https://mcloud.vvid30c.site/watch/?v21#VkkxMmJlbXIra2FucVBqRGRsYVpObjEvajVrSGkrYXIxbzhsOVJtMzk5SlNpTVFoRjRkY0pGN1RwdFVWb0FGSnN0Zz0",
    name: "21 Jump Street",
    production: ["Stephen J. Cannell Productions", "Columbia Pictures", "Relativity Media", "Original Film", "Metro-Goldwyn-Mayer"],
    releaseDate: "03/14/2012"
});
addMovie({
    description: "This is the extraordinary tale of two brothers named Moses and Ramses, one born of royal blood, and one an orphan with a secret past. Growing up the best of friends, they share a strong bond of free-spirited youth and good-natured rivalry. But the truth will ultimately set them at odds, as one becomes the ruler of the most powerful empire on earth, and the other the chosen leader of his people! Their final confrontation will forever change their lives and the world.",
    genres: ["Adventure", "Animation", "Drama", "Family", "Music", "Comedy"],
    link: "https://mcloud.vvid30c.site/watch/?v21#Q1ZoUStQak40ZVY4TDhRdVp6OVdrWTBKbEttWUxEdXZsL3dhQTM5ZVZHR3Z0cnZxYWh3RExOdlNDZjBhL2lkdVZBUT0",
    name: "The Prince of Egypt",
    production: ["DreamWorks Animation", "DreamWorks"],
    releaseDate: "12/15/1998"
});
simpleMovie("Baby Driver", "https://mcloud.vvid30c.site/watch/?v21#VERvUWVpNm93TXhNUFJWeXBCdmJTaE12NEh5M0dhdG5UWXBzUWI4OGtUZTVtYnJJVkEyT1E5V1F2ZU9FcmMzMUs5S1k");
simpleMovie("Dead Poets Society", "https://vvid30c.site/watch/#amt4S3BNc3ArWlA0NHJwaUp2OWovbStVK2dqSVR5OUNTcGZ1bU9scGNjMU15RmxOTGd5SkxXbFMwU0VtVVpVcm1UVT0");
simpleMovie("The Incredibles", "https://vvid30c.site/watch/#VytqQk9YTFZTaGJONEdudWFWenhCQUtGMS9kcFZERSs3TVFZVFlEcGg5MTNnbXBxNmI5ZHY4ZUFvQWx0V1VtT2ZGMD0");
simpleMovie("The Incredibles 2", "https://vvid30c.site/watch/#OUNjbDJveGhIOWx3SjVpQWZaTFhsdzdPT0RQNFlmVHFDMGRKcngwUlhBQXNXd2lWS1F5K05vckJQZnhmR1lqVC9vSkI");
simpleMovie("Brave", "https://vvid30c.site/watch/#VG5maGxOV0RUWVpXeWhXVFczYSs5ZDVST2RYdmNZRU5vNnZvV3ZwRGIzcFZrVWZFYi9IeW8yczlSaC9ZZjBmVHBPbz0");
simpleMovie("Cars", "https://vvid30c.site/watch/#QlpCTEJ4TE1STXhuT3k3WUp0RllQWHkzSlN3dGdraisxK3JESmRPbDU3QlhEcThPWnFPMlZuS0NVRUd3Sk0yaFlZWT0");
simpleMovie("Cars 2", "https://vvid30c.site/watch/#QzFXUnBZaGppWThRV1dUWHJvNDYyaDEvemFIMEJZbmMxWjNCWG5VTkpEWTVOcU1PcCtQQ25CMUNiVStudlZvRkJwdz0");
simpleMovie("Cars 3", "https://vvid30c.site/watch/#RkFJWUljNVVXREFDeXlwa0tzMTI3YTFSRkppSFJZd243OXpKV1RJSDBxcmh0bEJxOURZOXVUbFB3a1JjaTdEaFVIK1A");
simpleMovie("Monsters Inc", "https://vvid30c.site/watch/#L0FrYVBQSmFKQzJobTltZDkwVWM1L014ak4zQXlXRGY0TitOTi9jRS9lTXdSTHdpR2RpYnFuVVMwTWx2WWFTWVJURT0");
simpleMovie("Monsters University", "https://vvid30c.site/watch/#SjlMclpUTUp5ejRGTiszaGp1eHk5aDMrUzloRVhjcU9SQlhwU2UxUUxRK2NaMHNMZTFZYjZHdXVpNUZVSTEwWFhTYz0");
simpleMovie("The Great Gatsby", "https://vvid30c.site/watch/#Y3lBUEVVVTQxa1BjWDh0MkNpQm1MWjdRVDV4eE1IRXM5eEVkUGVQZnZPbVZUbzdpckFDQzdqU0kyOXl6eW5kcThPND0");
simpleMovie("Oppenheimer", "https://vvid30c.site/watch/#RG5wRDFXbWpiNnpQdGRWUE1ockxpK3g0SUdWRlhjcXlENXV4UVBTazZaTFUvSTI2bjg4a0pJalA4a2lycy9TYVdJcFc5ejNDYjVJPQ");
simpleMovie("The Breakfast Club", "https://vvid30c.site/watch/#MmlkZUY1SWlTcmJVaVJnVFhhV2YzZHV3T3AxR202dWk2em9jbFFuTVdja0pSMVFoZzY4QkZsNTlsTGZrNUgxRlRUMD0");
simpleMovie("Scott Pilgrim vs the World", "https://vvid30c.site/watch/#alk0Y1lVMW0xQWdUd284WTBCZ1dVcU9heVRsUFlQVS9WVE1NcFVPTjdsaTEvWlp6SEFJSTEzQzJhRGJLWWFQN2lSMSs");
simpleMovie("The Sandlot", "https://vvid30c.site/watch/#VktZUXlHUi9lSFM5RkIvdEw1UktCUEprM3B0Ym4zUk9reWY1RHp4L0N6K2tXYldQZmNkMjhyaWR5MzJBckhzU24vTT0");
function simpleMovie(movieName, movieLink) {
    addMovie({
        description: "",
        genres: [""],
        link: movieLink,
        name: movieName,
        production: [""],
        releaseDate: ""
    });
}
search(movies);
document.getElementById("searchBar").addEventListener("keydown", function (event) {
    var eventTarget = event.target;
    document.getElementById("movies").innerHTML = "";
    if (eventTarget.value.toLowerCase() === "") {
        search(movies);
    }
    else {
        search(getSearchedMovies(eventTarget.value));
    }
});
document.getElementById("searchBar").addEventListener("keyup", function (event) {
    var eventTarget = event.target;
    document.getElementById("movies").innerHTML = "";
    if (eventTarget.value.toLowerCase() === "") {
        search(movies);
    }
    else {
        search(getSearchedMovies(eventTarget.value));
    }
});

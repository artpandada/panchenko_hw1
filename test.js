"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB  = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
personalMovieDB.movies[prompt("Один из последних просмотренных фильмов","")]= prompt("На сколько оцените его","");
console.log(personalMovieDB );
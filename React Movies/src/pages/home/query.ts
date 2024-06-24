export const fetchMovies = async () => {
    // Facem o solicitare HTTP pentru a obține un nou `guest_session_id`
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=ro-RO&page=1', {
        headers: {
            accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTczOTg3MjMzMDA5NDgzMzFlNTRlZGZiMzViOGJhZSIsInN1YiI6IjY2NzQxZDkxMWQwZjAyZDEwY2M0ZjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ahV9tS6rFEAc3Ttiy3bd0BIsNmOiHrcPaNJsbvlmas'  // Autorizarea necesară
        },
    });

    // Verificăm dacă răspunsul este OK
    if (!res.ok) {
        // Aruncăm o eroare dacă răspunsul nu este OK
        throw new Error("Network response was not ok");
    }

    // Parsăm răspunsul JSON și îl returnăm
    const data = await res.json();
    return data;
};
export const fetchTvShows = async () => {
    // Facem o solicitare HTTP pentru a obține un nou `guest_session_id`
    const res = await fetch('https://api.themoviedb.org/3/tv/popular?language=ro-RO&page=1', {
        headers: {
            accept: 'application/json',  // Specificăm că acceptăm răspunsuri JSON
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTczOTg3MjMzMDA5NDgzMzFlNTRlZGZiMzViOGJhZSIsInN1YiI6IjY2NzQxZDkxMWQwZjAyZDEwY2M0ZjFkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ahV9tS6rFEAc3Ttiy3bd0BIsNmOiHrcPaNJsbvlmas'  // Autorizarea necesară
        },
    });

    // Verificăm dacă răspunsul este OK
    if (!res.ok) {
        // Aruncăm o eroare dacă răspunsul nu este OK
        throw new Error("Network response was not ok");
    }

    // Parsăm răspunsul JSON și îl returnăm
    const data = await res.json();
    return data;
};

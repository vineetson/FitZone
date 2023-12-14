export default getExercises = async() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.EXERCISE_API_HOST,
      },
    };

    fetch(
      "https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=10",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
}

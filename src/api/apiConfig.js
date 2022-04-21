const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fef50781b10003c2a66dd5328cbdd88e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
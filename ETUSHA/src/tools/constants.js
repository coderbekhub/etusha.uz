export const LANGUAGE = "app-manbalar-app"

export const API_PATH = `https://backend.etusha.uz/${
    localStorage.getItem(LANGUAGE) ? localStorage.getItem(LANGUAGE) : "ky"
  }/`;
export class Movie {
  constructor(
    public imdbRating?: string,
    public Title?: string,
    public Year?: string,
    public Rated?: string,
    public Runtime?: string,
    public Genre?: string,
    public Director?: string,
    public Writer?: string,
    public Actors?: string,
    public Plot?: string,
    public imdbID?: string,
    public imdbLink?: string,
  ) {
    this.imdbLink = `http://www.imdb.com/title/${this.imdbID}`
  }
}

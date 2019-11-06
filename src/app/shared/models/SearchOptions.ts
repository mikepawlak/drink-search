export class SearchOptions {
    searchString: string;
    queryParam: string;

    constructor(searchString, queryParam = 'S') {
        this.searchString = searchString;
        this.queryParam = queryParam;
    }
}
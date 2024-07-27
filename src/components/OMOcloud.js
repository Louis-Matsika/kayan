class OMOcloud {
    #name;
    #pfp
    #tag;
    #number;
    #isArtist;
    #isProducer;
    #isVisual;
    #bio;
    constructor(name, pfp, tag, number, isArtist, isProducer, isVisual, bio) {
        /*
        name = (string) name of member
        pfp = (string) path to picture
        number = (string) 4 digit ID number picked by member
        isArtist = (boolean) is member a artist yes or no?
        isProducer = (boolean) is member a producer yes or no?
        isVisual = (boolean) is member a visual artist yes or no?
        bio = (string) biography of member
        */

        this.#name = name;
        this.#pfp = pfp;
        this.#tag = tag;
        this.#number = number;
        this.#isArtist = isArtist;
        this.#isProducer = isProducer;
        this.#isVisual = isVisual;
        this.#bio = bio;
    }

    //getters
    get getName() {
        return this.#name;
    }

    get getPfp() {
        return this.#pfp;
    }

    get getTag(){
        return this.#tag;
    }
    
    get getNumber() {
        return this.#number;
    }

    get getIsArtist(){
        return this.#isArtist;
    }
    
    get getIsProducer(){
        return this.#isProducer;
    }

    get getIsVisual(){
        return this.#isVisual;
    }

    get getBio(){
        return this.#isVisual;
    }
}

const SAI = new OMOcloud(
    "SAI's fate.",
    "",
    "what a fateful day.",
    "0011",
    true,
    true,
    true,
    "1"
);

export {SAI};
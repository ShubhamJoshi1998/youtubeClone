export const API_KEY = 'AIzaSyB43B6jvMssXbyQvvfzqfXpHgIWQqdbBhw';
//export const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const valueConverter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"k";
    }
    else{
        return value;
    }
}

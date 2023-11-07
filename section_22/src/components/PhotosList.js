import { useFetchPhotosQuery } from "../store";

function PhotosList ({ album }) {
    useFetchPhotosQuery(album);

    return <div>photoes</div>
}

export default PhotosList;
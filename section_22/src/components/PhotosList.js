import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";
import Button from "./Button";

function PhotosList ({ album }) {
    useFetchPhotosQuery(album);
    const [addPhoto, addPhotoresults] = useAddPhotosMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center juctify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={addPhotoresults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
        </div>
    )
}

export default PhotosList;
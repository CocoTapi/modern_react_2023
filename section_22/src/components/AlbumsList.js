import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skelton from './Skeleton';
import ExpandablePanel from "./ExpandablePanel";
import Button from './Button';

function AlbumsList({ user }) {
  const { data, error, isLoading} = useFetchAlbumsQuery(user);
  //this "user" needs to be matched witn "query" function's (user) in the albumsApis line 10. 

  //console.log(data, error, isLoading);

  const [addAlbum, results] = useAddAlbumMutation();
  //console.log(results);
  const handleAddAlbum = () => {
    addAlbum(user);
  }

  let content;
  if (isLoading) {
    content = <Skelton times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>

      return <ExpandablePanel key={album.id} header={header}>
        List of photoes in the album
      </ExpandablePanel>
    })
  }

  return (
    <div>
      <div>
        Albums for {user.name}
        <Button onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;

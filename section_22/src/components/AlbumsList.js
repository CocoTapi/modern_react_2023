import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from "./ExpandablePanel";
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

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
    content = <Skeleton times={3} className="h-10 w-full" />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album}/>
    })
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>+ Add Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;

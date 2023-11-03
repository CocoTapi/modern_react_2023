import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skelton from "./Skelton";

function UsersList () {
    const dispatch = useDispatch();
    const {isLoading, data, error} = useSelector((state) => {
        return state.users; // { data: [], isLoading: false, error: null }
    })

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        return <Skelton times={6} className="h-10 w-full" />;
    }

    if (error) {
        return <div>Error fetching data...</div>
    }

    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div>
        )
    })

    return <div>{renderedUsers}</div>;
}

export default UsersList;
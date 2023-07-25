import React from 'react';

function ProfileCard({ title, handle, image }) {
  console.log(title, handle);
  // const title = props.title;
  // const handle = props.handle;
  //const { title, handle } = props;

  return (
    <div>
        <div>{image}</div>
        <div>Title is {title}</div>
        <div>Handle is {handle}</div>
    </div>
    );
}

export default ProfileCard;

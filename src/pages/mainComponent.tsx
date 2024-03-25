import React, {useState} from 'react';
import SignUp from './SignUp';
import Home from './Home';

const MainComponent = (avatar, setAvatar) => {
  const [avatar, setAvatar] = useState(null);

  return (
    <>
      <SignUp avatar={avatar} setAvatar={setAvatar} />
      <Home avatar={avatar} />
    </>
  );
};

export default MainComponent;

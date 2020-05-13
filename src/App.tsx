import React from 'react';
import { OptionsPanel } from './Hud/OptionsPanel';
import AlbumsList from './Hud/AlbumsList';
import { ActivityPanel } from './Hud/Activity';
import SongsList from './Hud/SongsList';

function App() {
  return (
    <>
      <OptionsPanel />
      <AlbumsList />
      <SongsList />
      <ActivityPanel />
    </>
  );
}

export default App;
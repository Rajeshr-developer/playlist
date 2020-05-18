import React from 'react';
import { OptionsPanel } from './Hud/OptionsPanel';
import AlbumsList from './Hud/AlbumsList';
import { RightHud } from './Hud/RightHud';
import LibraryPanel from './Hud/LibraryPanel';
import SongsList from './Hud/SongsList';
import { Header } from './Hud/Header';

function App() {
  return (
    <>
      <LibraryPanel/>
      <Header/>
      <OptionsPanel />
      <AlbumsList />
      <SongsList />
      <RightHud />
    </>
  );
}

export default App;
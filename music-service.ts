'use strict';

import { Injectable } from '@angular/core';
import { AssetGenre } from '../../models/genre/asset-genre';
import { MusicDataProvider } from '@services/data-providers/music-data-provider';
import { GenreMedia } from 'models';
import { AudioAlbum } from '../../../third-party-lib/frontend-sdk/typings';
import { AudioAlbumDummy } from 'models/music/audio-album-dummy';
import { AudioTrackDummy } from 'models/music/audio-track-dummy';

@Injectable()
export class MusicService {

  constructor(private musicDataProvider: MusicDataProvider) {
  }

  public getMusic(): any {
    return this.musicDataProvider.getMusic();
  }

  public getMusicGenres(): Array<AssetGenre> {
    return this.musicDataProvider.getMusicGenres();
  }

  public getAudioAlbumDetails(albumId: string): AudioAlbumDummy {
    return this.musicDataProvider.getAudioAlbumDetails(albumId);
  }

  public getAudioTracks(): Array<AudioTrackDummy> {
    return this.musicDataProvider.getAudioTracks();
  }

}

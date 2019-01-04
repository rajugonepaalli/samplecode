'use strict';

import {Injectable} from '@angular/core';
import { AssetGenre } from '../../models/genre/asset-genre';
import { MediaRecords } from '../../models/media/media-records';
import { Language } from '../../models/common/language';
import { HttpClient } from '@angular/common/http';
import {TvShowsDataProvider} from '@services/data-providers/tv-shows-data-provider';
import {Media} from '../../models';
import { TvSeason } from '../../../third-party-lib/frontend-sdk/typings';

@Injectable()
export class TvshowsService {

  constructor(private httpService: HttpClient,
              private tvShowsDataProvider: TvShowsDataProvider) {
  }

  public getShows(): any {
    return this.tvShowsDataProvider.getShows();
  }

  public getShowsGenres(): Array<AssetGenre> {
    return this.tvShowsDataProvider.getShowsGenres();
  }

  public getShowsLanguages(): Array<Language> {
    return this.tvShowsDataProvider.getShowsLanguages();
  }

  public getTvEpisodes(): Array<Media> {
    return this.tvShowsDataProvider.getEpisodes();
  }

  public getTvShowDetails(): TvSeason {
    return this.tvShowsDataProvider.getTVShowSeason().tvseason;
  }
}

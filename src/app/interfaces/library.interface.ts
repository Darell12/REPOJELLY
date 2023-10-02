export interface LibraryOptions {
  EnablePhotos: boolean;
  EnableRealtimeMonitor: boolean;
  EnableChapterImageExtraction: boolean;
  ExtractChapterImagesDuringLibraryScan: boolean;
  PathInfos: { Path: string }[];
  SaveLocalMetadata: boolean;
  EnableInternetProviders: boolean;
  EnableAutomaticSeriesGrouping: boolean;
  EnableEmbeddedTitles: boolean;
  EnableEmbeddedEpisodeInfos: boolean;
  AutomaticRefreshIntervalDays: number;
  PreferredMetadataLanguage: string;
  MetadataCountryCode: string;
  SeasonZeroDisplayName: string;
  MetadataSavers: string[];
  DisabledLocalMetadataReaders: string[];
  LocalMetadataReaderOrder: string[];
  DisabledSubtitleFetchers: string[];
  SubtitleFetcherOrder: string[];
  SkipSubtitlesIfEmbeddedSubtitlesPresent: boolean;
  SkipSubtitlesIfAudioTrackMatches: boolean;
  SubtitleDownloadLanguages: string[];
  RequirePerfectSubtitleMatch: boolean;
  SaveSubtitlesWithMedia: boolean;
  AutomaticallyAddToCollection: boolean;
  AllowEmbeddedSubtitles: string;
  TypeOptions: {
    Type: string;
    MetadataFetchers: string[];
    MetadataFetcherOrder: string[];
    ImageFetchers: string[];
    ImageFetcherOrder: string[];
    ImageOptions: any[]; // Deberías definir una interfaz específica si conoces la estructura exacta
  }[];
}

export interface CollectionObject {
  Name: string;
  Locations: string[];
  CollectionType: string;
  LibraryOptions: LibraryOptions;
  ItemId: string;
  RefreshStatus: string;
}

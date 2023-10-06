export interface MediaItem {
  Name: string;
  ServerId: string;
  Id: string;
  Container: string;
  ChannelId: string | null;
  RunTimeTicks: number;
  IsFolder: boolean;
  Type: string;
  UserData: {
    PlaybackPositionTicks: number;
    PlayCount: number;
    IsFavorite: boolean;
    LastPlayedDate: string;
    Played: boolean;
    Key: string;
  };
  PrimaryImageAspectRatio: number;
  VideoType: string;
  ImageTags: {
    Primary: string;
  };
  BackdropImageTags: string[];
  ImageBlurHashes: {
    Primary: {
      [key: string]: string;
    };
  };
  LocationType: string;
  MediaType: string;
}

export interface ApiResponse {
  Items: MediaItem[];
  TotalRecordCount: number;
  StartIndex: number;
}

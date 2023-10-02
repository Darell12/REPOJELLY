export interface User {
    Name: string;
    ServerId: string;
    Id: string;
    HasPassword: boolean;
    HasConfiguredPassword: boolean;
    HasConfiguredEasyPassword: boolean;
    EnableAutoLogin: boolean;
    LastLoginDate: string;
    LastActivityDate: string;
    Configuration: {
      PlayDefaultAudioTrack: boolean;
      SubtitleLanguagePreference: string;
      DisplayMissingEpisodes: boolean;
      GroupedFolders: any[]; // Cambia el tipo de acuerdo a tu necesidad
      SubtitleMode: string;
      DisplayCollectionsView: boolean;
      EnableLocalPassword: boolean;
      OrderedViews: any[]; // Cambia el tipo de acuerdo a tu necesidad
      LatestItemsExcludes: any[]; // Cambia el tipo de acuerdo a tu necesidad
      MyMediaExcludes: any[]; // Cambia el tipo de acuerdo a tu necesidad
      HidePlayedInLatest: boolean;
      RememberAudioSelections: boolean;
      RememberSubtitleSelections: boolean;
      EnableNextEpisodeAutoPlay: boolean;
    };
    Policy: {
      IsAdministrator: boolean;
      IsHidden: boolean;
      IsDisabled: boolean;
      BlockedTags: string[];
      EnableUserPreferenceAccess: boolean;
      AccessSchedules: any[]; // Cambia el tipo de acuerdo a tu necesidad
      BlockUnratedItems: any[]; // Cambia el tipo de acuerdo a tu necesidad
      EnableRemoteControlOfOtherUsers: boolean;
      EnableSharedDeviceControl: boolean;
      EnableRemoteAccess: boolean;
      EnableLiveTvManagement: boolean;
      EnableLiveTvAccess: boolean;
      EnableMediaPlayback: boolean;
      EnableAudioPlaybackTranscoding: boolean;
      EnableVideoPlaybackTranscoding: boolean;
      EnablePlaybackRemuxing: boolean;
      ForceRemoteSourceTranscoding: boolean;
      EnableContentDeletion: boolean;
      EnableContentDeletionFromFolders: any[]; // Cambia el tipo de acuerdo a tu necesidad
      EnableContentDownloading: boolean;
      EnableSyncTranscoding: boolean;
      EnableMediaConversion: boolean;
      EnabledDevices: any[]; // Cambia el tipo de acuerdo a tu necesidad
      EnableAllDevices: boolean;
      EnabledChannels: any[]; // Cambia el tipo de acuerdo a tu necesidad
      EnableAllChannels: boolean;
      EnabledFolders: any[]; // Cambia el tipo de acuerdo a tu necesidad
      EnableAllFolders: boolean;
      InvalidLoginAttemptCount: number;
      LoginAttemptsBeforeLockout: number;
      MaxActiveSessions: number;
      EnablePublicSharing: boolean;
      BlockedMediaFolders: any[]; // Cambia el tipo de acuerdo a tu necesidad
      BlockedChannels: any[]; // Cambia el tipo de acuerdo a tu necesidad
      RemoteClientBitrateLimit: number;
      AuthenticationProviderId: string;
      PasswordResetProviderId: string;
      SyncPlayAccess: string;
    };
  }
  

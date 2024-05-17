interface UpdateProgressProps {
  keywords?: {
    primary: string;
    secondary: string[];
  }[];
  sources?: Array<{
    source: string;
    selected: boolean;
  }>;
  notifications?: {
    value: string;
    source?: string;
    frequency?: string;
    sendTo?: string;
  }[];
}
export function UpdateProgress(progress: UpdateProgressProps): void {
  const sessionPG = JSON.parse(
    sessionStorage.getItem('progress') ?? '{}'
  ) as UpdateProgressProps;
  const { keywords, sources, notifications } = progress;
  const pg = {
    ...sessionPG,

    ...((sessionPG.keywords !== undefined || keywords !== undefined) && {
      keywords:
        keywords !== undefined
          ? keywords.map((keyword) => {
              return {
                primary: keyword.primary,
                secondary: keyword.secondary.filter(
                  (secondary) => secondary !== ''
                )
              };
            })
          : sessionPG.keywords
    }),
    ...((sessionPG.sources !== undefined || sources !== undefined) && {
      sources: sources ?? sessionPG.sources
    }),
    ...((sessionPG.notifications !== undefined ||
      notifications !== undefined) && {
      notifications:
        notifications !== undefined
          ? notifications.map((notification) => {
              return {
                value: notification.value,
                source: notification.source ?? 'Reddit & Twitter',
                frequency: notification.frequency ?? 'As it happens',
                sendTo: notification.sendTo ?? ''
              };
            })
          : sessionPG.notifications
    })
  };
  sessionStorage.setItem('progress', JSON.stringify(pg));
}

export default UpdateProgress;

interface GetProgressProps {
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
    source: string;
    frequency: string;
    sendTo: string;
  }[];
}

export function GetProgress(): GetProgressProps {
  const sessionPG = JSON.parse(
    sessionStorage.getItem('progress') ?? '{}'
  ) as GetProgressProps;

  return {
    keywords:
      sessionPG.keywords !== undefined
        ? sessionPG.keywords.map((keyword) => {
            return {
              primary: keyword.primary,
              secondary: keyword.secondary.filter(
                (secondary) => secondary !== ''
              )
            };
          })
        : undefined,
    sources: sessionPG.sources ?? undefined,
    notifications:
      sessionPG.notifications !== undefined
        ? sessionPG.notifications.map((notification) => {
            return {
              value: notification.value,
              source: notification.source,
              frequency: notification.frequency,
              sendTo: notification.sendTo
            };
          })
        : undefined
  };
}

export default GetProgress;

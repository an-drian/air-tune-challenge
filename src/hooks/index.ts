import { useEffect, useState } from "react";
import { testStreamLink } from "../api/stream";
import { useSelector, useDispatch } from "react-redux";
import { streamUrlSelector, updateAllStreamState } from "../app/slices/stream";
import type { AppDispatch } from "../app/store";

type UseStreamReturn = {
  isLoading: boolean;
  isStreamLinkAlive: boolean;
  streamUrl: string | null;
};

export const useStreamLinkStatus = (): UseStreamReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const { streamUrl, available: isStreamLinkAlive } =
    useSelector(streamUrlSelector);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    if (streamUrl) {
      setIsLoading(true);

      testStreamLink(streamUrl)
        .then((result) => {
          if (isMounted) {
            dispatch(
              updateAllStreamState({ streamUrl: streamUrl, available: result })
            );
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error occurred while testing stream link:", error);
          if (isMounted) {
            dispatch(
              updateAllStreamState({ streamUrl: null, available: false })
            );
            setIsLoading(false);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [streamUrl, dispatch]);

  return { isLoading, isStreamLinkAlive, streamUrl };
};

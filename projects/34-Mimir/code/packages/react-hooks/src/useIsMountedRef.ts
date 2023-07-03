// Copyright 2023-2023 dev.mimir authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useRef } from 'react';

import { createNamedHook } from './createNamedHook';

export type MountedRef = React.MutableRefObject<boolean>;

function useIsMountedRefImpl(): MountedRef {
  const isMounted = useRef(false);

  useEffect((): (() => void) => {
    isMounted.current = true;

    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

export const useIsMountedRef = createNamedHook('useIsMountedRef', useIsMountedRefImpl);

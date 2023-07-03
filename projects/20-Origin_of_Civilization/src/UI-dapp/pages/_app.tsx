import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, bsc, goerli, mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import dynamic from 'next/dynamic';

const GnosisChain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'Gnosis',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'xDai',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.ankr.com/gnosis'],
    },
    public: {
      http: ['https://gnosis-mainnet.public.blastapi.io'],
    },
  },
  blockExplorers: {
    default: { name: 'Gnosis Scan', url: 'https://gnosisscan.io/' },
  },
  // iconUrls: [""],
  iconUrl: 'https://images.prismic.io/koinly-marketing/16d1deb7-e71f-48a5-9ee7-83eb0f7038e4_Gnosis+Chain+Logo.png',
  iconBackground: '#fff',

  testnet: false,
}

const MoonBeamChain = {
  id: 0x504,
  name: 'MoonBeam Chain',
  network: 'MoonBeam',
  nativeCurrency: {
    decimals: 18,
    name: 'GLMR',
    symbol: 'GLMR',
  },
  rpcUrls: {
    default: {
      // http: ['https://moonbeam.api.onfinality.io/public'],
      http:['https://moonbeam.api.onfinality.io/rpc?apikey=cb099080-c825-4347-b383-db620d5dc480']
    },
    public: {
      // http: ['https://moonbeam.api.onfinality.io/public'],
      http:['https://moonbeam.api.onfinality.io/rpc?apikey=cb099080-c825-4347-b383-db620d5dc480']
    },
  },
  blockExplorers: {
    default: { name: 'MoonBeam Scan', url: 'https://moonbeam.moonscan.io' },
  },
  // iconUrls: [""],
  iconUrl: 'https://pbs.twimg.com/profile_images/1649617041219809282/RXHB0DY8_400x400.jpg',
  iconBackground: '#fff',

  testnet: false,
}


const AstarChain = {
  id: 0x250,
  name: 'Astar Chain',
  network: 'Astar',
  nativeCurrency: {
    decimals: 18,
    name: 'ASTR',
    symbol: 'ASTR',
  },
  rpcUrls: {
    default: {
      http: ['https://astar.public.blastapi.io'],
    },
    public: {
      http: ['https://1rpc.io/astr'],
    },
    public2: {
      http: ['https://astar.api.onfinality.io/public'],
    },
  },
  blockExplorers: {
    default: { name: 'Gnosis Scan', url: 'https://astar.subscan.io/extrinsic/' },
  },
  // iconUrls: [""],
  iconUrl: 'https://pbs.twimg.com/profile_images/1623203996445077507/puetjPqu_400x400.jpg',
  iconBackground: '#fff',

  testnet: false,
}


const { chains, provider, webSocketProvider } = configureChains(
  [
    // mainnet,
    // arbitrum,
    MoonBeamChain,
    // AstarChain,
    // GnosisChain,  
    // bsc,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

// export default MyApp;

export default dynamic(() => Promise.resolve(MyApp), {
  ssr:false,
})
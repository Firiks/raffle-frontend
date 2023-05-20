import { NotificationProvider } from "web3uikit";
import { MoralisProvider } from 'react-moralis';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return(
    <NotificationProvider>
      <MoralisProvider initializeOnMount={false}>
        <Component {...pageProps} />
      </MoralisProvider>
    </NotificationProvider>
  ) ;
}

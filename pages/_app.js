import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router?.route} className='h-full'>
          <Transition></Transition>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;

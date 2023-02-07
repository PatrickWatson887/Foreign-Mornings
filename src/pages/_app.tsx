import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import Layout from "../components/layout";
import { AnimatePresence } from 'framer-motion'


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component {...pageProps} />;
    </AnimatePresence>
  )
};

export default api.withTRPC(MyApp);

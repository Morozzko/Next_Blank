import React, {FC} from "react";

import Head from "next/head";


const InitialSEO = {
    title: "Газпром"
}


const MainLayout: FC<{ SEO? }> = ({children}, {SEO = InitialSEO}) => {
    return (
        <div>
            <Head>
                <title>{SEO.title}</title>
            </Head>
            {children}
        </div>
    )
}

export default MainLayout

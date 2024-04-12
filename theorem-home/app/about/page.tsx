const AboutPage = () => {
    return (
        <section className="dynamic-offset">
            <h1 className="text-center md:text-left">What the what? </h1>
            <div className="text-xl">
                <p>After several years in the development game, Ive decided to do the one thing Ive never done, have my own site. </p>
                <p>This will be constantly evolving, so what one button does today, may be different tomorrow.  </p>

                <div className="flex flex-col md:flex-row justify-between mt-6">
                    <details className="text-xl cursor-pointer md:w-1/2 md:border-r-2">
                        <summary className="text-2xl">About this site</summary>
                        <p className="p-4">
                            Currently Angel-Theorem.com is hosted in AWS using AppRunner. Hosting is configured
                            in route 53, leveraging a custom docker container. Currently we are not connected to
                            any CMS, but that is expected to change. This is a Next.js site running on Next.js 14.
                        </p>
                    </details>
                    <details className="text-xl cursor-pointer w-1/2 md:pl-6 pt-4">
                        <summary className="text-2xl">About Me</summary>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
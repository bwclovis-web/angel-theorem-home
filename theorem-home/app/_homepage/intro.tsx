import styles from './intro.module.scss'

const Intro = () => (
    <>
        <div className='mt-10 xl:w-[900px] 2xl:w-[1200px]'>
            <span className={styles.glitch_subheadings}>THE</span>
            <h1 className={styles.glitch_heading}>
                <span className='relative flex flex-col'>
                    <span data-text="ANGEL" className={styles.glitch_span}>ANGEL</span>
                    <span className={`${styles.background_glow} left-0`}>ANGEL</span>
                </span>
                <span className='relative flex flex-col'>
                    <span data-text="THEOREM" className={styles.glitch_span}>THEOREM</span>
                    <span className={`${styles.background_glow} right-0 bottom-0`}>THEOREM</span>
                </span>
            </h1>
            <span className={`${styles.glitch_subheadings} text-center mx-auto block uppercase mt-6 border-t-2 b border-b-2 py-2`}>Development Home</span>
        </div>
        <div className={styles.background_lines}/>
    </>
)

export default Intro
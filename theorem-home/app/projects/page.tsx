import {WebsiteData} from '../data/websites'
import { ProjectData } from '../data/projects'
import InfoCard from '../ui/InfoCards/InfoCards'

const ProjectPage = () =>  (
    <section className="dynamic-offset">
        <h1 className="text-center md:text-left">What am I up to?</h1>
        <div className="text-xl mb-6 border-b-4 pb-4 border-indigo-900 dark:border-indigo-950">
            <p>Here is a list of my current work and work in progress.</p>
        </div>
        <h2 className="text-center md:text-left">Sites I work on</h2>
        <div className="mb-6 border-b-4 pb-10 border-indigo-900">
            <p className='text-xl'>These are webpages I actively am working on.</p>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 mt-6'>
                {WebsiteData.map((item, idx) => {
                    return <InfoCard key={idx} data={item} />
                })}
            </div>
        </div>
        <h2 className="text-center md:text-left">Projects I am involved in.</h2>
        <div className="mb-6 border-b-4 pb-10 border-indigo-900 dark:border-indigo-950">
            <p className='text-xl'>Some things I am working on in various states of disarray or doneness.</p>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 mt-6'>
                {ProjectData.map((item, idx) => {
                    return <InfoCard key={idx} data={item} />
                })}
            </div>
        </div>
        
    </section>
)


export default ProjectPage
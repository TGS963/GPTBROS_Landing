import Book from "../icons/book"
import LoudSpeaker from "../icons/loudspeaker"
import Tools from "../icons/tools"

const RibbonCard = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="flex flex-row items-center gap-4">
                {title === "Tools" && <Tools className='w-8 h-8 stroke-purple-500' />}
                {title === "Tutorials" && <Book className='w-8 h-8 stroke-purple-500' />}
                {title === "News" && <LoudSpeaker className='w-8 h-8 stroke-purple-500' />}
            <div className="flex flex-col gap-6 ">
                <h3 className="text-xl font-mono">{title}</h3>
                <p className="text-sm">{description}</p>
                <p className="cursor-pointer text-sm">Learn more {'->'}</p>
            </div>
        </div>
    )
}

export const Ribbon = () => {
    return (
        <div className="flex flex-row items-center bg-cyan-600 p-24 justify-evenly gap-8">
            <RibbonCard title="News" description="News of all new AI launches, to keep you in the loop of rapid advancement in the space" />
            <RibbonCard title="Tools" description="Explore all the tools that make you superhuman. Be the first one to adopt them." />
            <RibbonCard title="Tutorials" description="Blog and video tutorials to get you started on the lastest AI consumer and coding tools" />
        </div>
    )

}
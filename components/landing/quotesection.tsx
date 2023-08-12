export const QuoteSection = () => {
    return (
        <div className="flex flex-col w-2/3 m-10 text-cyan-100">
            <p className="text-center font-mono text-4xl py-24">The Age of AI is upon us</p>
            <div className="flex flex-row justify-evenly gap-12">
                <div className="shadow-[0_0px_15px_-3px] p-12 text-xl shadow-white">
                    <p className="mb-8">{'"'}AI is not just about replacing human jobs; {"it's"} about augmenting human potential.{'"'}</p>
                    <p className="font-bold text-base mb-2">Satya Nadella</p>
                    <p className="text-xs text-red-500">CEO of Microsoft</p>
                </div>
                <div className="flex flex-col justify-between">
                    <p>The race has just begun, get ahead or be left behind. This is a revolution as pivotal as the internet, electricity, farming or fire.</p>
                    <p className="font-bold">In this age where every week new tools and models are released. The people who build them and use them will get far ahead of people that {"don't"}. If AI {"doesn't"} replace you, someone with AI tools will.</p>
                    <p>GPT_BROS is a community and resource where we help each other by sharing news, using tools and build things that are cool!</p>
                </div>
            </div>
        </div>
    )
}
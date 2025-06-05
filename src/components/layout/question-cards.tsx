const QuestionCards = () => {
    return (
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
                <div className="border border-gray-200 rounded-xl p-2 hover:bg-gray-100 cursor-pointer">
                    <span className="font-semibold">Why the sky</span> <br /><span className="text-gray-500">is blue?</span>
                </div>
            </div>
            <div className="col-span-6">
                <div className="border border-gray-200 rounded-xl p-2 hover:bg-gray-100 cursor-pointer">
                    <span className="font-semibold">Explain the </span> <br /><span className="text-gray-500">Relativity theory</span>
                </div>
            </div>
            <div className="col-span-6">
                <div className="border border-gray-200 rounded-xl p-2 hover:bg-gray-100 cursor-pointer">
                    <span className="font-semibold">What are the advantages</span> <br /><span className="text-gray-500">of using Next.js?</span>
                </div>
            </div>
            <div className="col-span-6">
                <div className="border border-gray-200 rounded-xl p-2 hover:bg-gray-100 cursor-pointer">
                    <span className="font-semibold">How does machine
                    </span> <br /><span className="text-gray-500">learning actually work?</span>
                </div>
            </div>
        </div>
    )
}

export default QuestionCards
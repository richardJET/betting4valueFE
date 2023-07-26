const stats = [
    { name: 'Past Week', stat: '0 - 0 - 0', roi: '0.00%' },
    { name: 'Past Month', stat: '0 - 0 - 0', roi: '0.00%' },
    { name: 'Past Year', stat: '0 - 0 - 0', roi: '0.00%' },
]

export default function Stats() {
    return (
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-4">
            <dl className="grid grid-cols-3 lg:gap-5 gap-1">
                {stats.map((item) => (
                    <div key={item.name} className="lg:flex justify-between overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <div>
                            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                            <dd className="mt-1 lg:text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                        </div>
                        <div className="lg:flex items-end">
                            <dt className="lg:mx-4 mt-2 truncate text-sm font-medium text-gray-500">ROI</dt>
                            <dd className="text-sm">{item.roi}</dd>
                        </div>
                    </div>
                ))}
            </dl>
        </div>
    )
}
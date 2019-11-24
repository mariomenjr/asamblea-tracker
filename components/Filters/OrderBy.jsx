export default function OrderBy(props) {
    return (
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 pl-1"
                htmlFor="grid-state"
            >
                Ordenar por
            </label>
            <div className="inline-block relative w-full sm:w-64">
                <select
                    value={props.selected}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={props.handleOnChange}
                >
                    {props.options.map((option, key) => (
                        <option key={key} value={key}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

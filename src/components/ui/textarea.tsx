type Props = {
    placeholder: string;
    rows: number;
    value?: string;
}

export const Textarea = ({ placeholder, value, rows }: Props) => {
    return (
        <div className="has-[:focus]:border-white flex items-center rounded-3xl border-2 border-gray-700">
            <textarea 
                className="flex-1 outline-none bg-transparent h-full p-5 size-none"
                placeholder={placeholder}
                value={value}
                rows={rows}
            ></textarea>
        </div>
    )
}
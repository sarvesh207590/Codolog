export default function Testimonials({
    name,
    role,
    image,
    text,
}: {
    name: string;
    role: string;
    image: string;
    text: string;
}) {
    return (
        <div
            className="relative w-full min-h-[240px] p-6 rounded-2xl bg-white border-2 border-gray-400 transition-shadow transition-colors duration-300 hover:border-sky-500 hover:shadow-md"
        >
            <div className="absolute -top-3 -left-2 text-4xl font-black text-gray-500">
                &ldquo;
            </div>
            <div className="flex gap-4 items-start">
                <img
                    src={image}
                    alt={`${name} profile`}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <p className="italic text-gray-700 mb-3">{text}</p>
                    <p className="font-bold text-black">{name}</p>
                    <p className="text-sm font-semibold text-gray-600">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

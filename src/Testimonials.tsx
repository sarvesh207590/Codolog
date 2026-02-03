export default function Testimonials({ name, role, image, text }: {
    name: string;
    role: string;
    image: string;
    text: string;
}) {
    return (
        <div className="flex gap-6">
        <div className="max-w-md p-6 border-2 border-gray-500 rounded-2xl bg-white ">
            <div className="flex gap-4 items-start">


                <img src={image} alt="profile" className="w-16 h-16 rounded-full object-cover" />
                <div>
                    <p className="italic text-gray-700 mb-3">
                        {text}
                    </p>
                    <p className="font-bold text-black">{name}    </p>
                    <p className="text-sm font-semibold text-gray-600">{role}</p>
                </div>
            </div>
        </div>
</div>
    );
}   
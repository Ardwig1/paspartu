import { MessageCircle, Heart, Repeat, Share } from "lucide-react";

const Post = ({ author, handle, content, time, likes, comments, reposts, image }) => {
    return (
        <div className="border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${author}`} alt={author} />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-midnight">{author}</span>
                        <span className="text-gray-500">@{handle}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500 text-sm">{time}</span>
                    </div>

                    {/* Text */}
                    <p className="text-charcoal mb-3 leading-relaxed">
                        {content}
                    </p>

                    {/* Image (Optional) */}
                    {image && (
                        <div className="mb-3 rounded-xl overflow-hidden border border-gray-200">
                            <img src={image} alt="Post content" className="w-full h-auto object-cover" />
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-between text-gray-500 max-w-md mt-4">
                        <ActionButton icon={<MessageCircle className="w-5 h-5" />} count={comments} />
                        <ActionButton icon={<Repeat className="w-5 h-5" />} count={reposts} />
                        <ActionButton icon={<Heart className="w-5 h-5" />} count={likes} />
                        <ActionButton icon={<Share className="w-5 h-5" />} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ActionButton = ({ icon, count }) => (
    <button className="flex items-center gap-2 hover:text-midnight transition-colors group">
        <div className="p-2 rounded-full group-hover:bg-gray-200 transition-colors">
            {icon}
        </div>
        {count && <span className="text-sm">{count}</span>}
    </button>
);

export default Post;

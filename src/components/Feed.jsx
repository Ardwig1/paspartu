import Post from "./Post";

const Feed = () => {
    // Mock Data
    const posts = [
        {
            id: 1,
            author: "Socrates",
            handle: "gadfly",
            time: "2h",
            content: "The unexamined life is not worth living. #Philosophy",
            likes: "42K",
            comments: "1.2K",
            reposts: "5K",
        },
        {
            id: 2,
            author: "Elon Musk",
            handle: "elonmusk",
            time: "5h",
            content: "Thinking about the nature of consciousness. Are we just biological machines?",
            likes: "120K",
            comments: "15K",
            reposts: "22K",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        },
        {
            id: 3,
            author: "Virginia Woolf",
            handle: "virginia_w",
            time: "1d",
            content: "A woman must have money and a room of her own if she is to write fiction.",
            likes: "89K",
            comments: "3K",
            reposts: "12K",
        },
    ];

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Feed;

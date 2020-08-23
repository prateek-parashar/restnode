exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "First Post", content: "This is the first post" }],
    });
};

exports.createPosts = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //create a post in the database
    res.status(201).json({
        message: "Post created successfully",
        post: { id: "helloThere", title: title, content: content },
    });
};

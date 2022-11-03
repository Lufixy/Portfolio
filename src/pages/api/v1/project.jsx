export default async(req, res) => { 
    const project = [
        {
            "name": "Kalashi.me",
            "description": "A personal website built with Next.js and Tailwind CSS",
            "html_url": "https://github.com/Kalashiexe/Kalashi.me",
            "image": "https://i.imgur.com/x7J5oG0.png"
        },
        

    ]
    res.status(200).json(project)
}

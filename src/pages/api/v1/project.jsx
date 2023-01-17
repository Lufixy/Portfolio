export default async(req, res) => { 
    const project = [
        {
            "name": "Kalashi.me",
            "link": "https://i.imgur.com/x7J5oG0.png",
            "description": "A personal website built with Next.js and Tailwind CSS",
            "html_url": "https://github.com/Kalashiexe/Kalashi.me"
        
        },
        {
            "name": "7bin.co",
            "link": "https://cdn.discordapp.com/attachments/1061295779853123684/1064914867909296188/image.png",
            "description": "A pastebin clone built with Next.js and Tailwind CSS",
            "html_url": "https://7bin.co"
        },

        

    ]
    res.status(200).json(project)
}

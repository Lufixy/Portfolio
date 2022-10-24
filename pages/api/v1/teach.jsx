export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
            "name": "Bootstrap",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
        },
        {
            "name": "CSS",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
            "name": "Javascript",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
            "name": "Node.js",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
            "name": "C#",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
        },
        {
            "name": "Mongo DB",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
            "name": "PHP",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
        },
        {
            "name": "TailwindCSS",
            "src": "https://ph-files.imgix.net/2e26f07f-e5e5-411e-ba1e-e92c4083bd92.png?auto=format&fit=crop",
        },
        {
            "name": "Next.js",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
        {
            "name": "MySQL",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        },
        {
            "name": "Express",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
            "name": "React",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
            "name": "Bulma",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bulma/bulma-plain.svg",
        },
        {
            "name": "Git",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
            "name": "Alpine.js",
            "src": "https://sperovita.gallerycdn.vsassets.io/extensions/sperovita/alpinejs-syntax-highlight/1.0.1/1642647041367/Microsoft.VisualStudio.Services.Icons.Default",
        },
        {
            "name": "Yarn",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg",
        },
        {
            "name": "Photoshop CC",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg",
        },
        {
            "name": "Illustrator CC",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
        },
        {
            "name": "Corel Draw",
            "src": "https://www.coreldraw.com/static/cdgs/images/pages/product-info-sheet/key-img.png",
        },
        {
            "name": "Github",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        },
        {
            "name": "Heroku",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg",
        },
        {
            "name": "Framer Motion",
            "src": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2012%2018%22%3E%3Cpath%20d%3D%22M%2012%200%20L%2012%206%20L%206%206%20L%200%200%20Z%20M%200%206%20L%206%206%20L%2012%2012%20L%206%2012%20L%206%2018%20L%200%2012%20Z%22%20fill%3D%22hsl(0%2C%200%25%2C%200%25)%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
        },

    ]
    res.status(200).json(techs)
}
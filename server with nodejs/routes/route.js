const routeLink = (req, res) => {
    console.log(req);

    const url = req.url;
    if (url === '/') {
        res.statusCode = 400;
        res.write(`
            <html>
                <head>
                    <title>
                        Testing application
                    </title>
                </head>
                <body>
                    <h3>Welcome to the testing application</h3>
                </body>
    
            </html>
        `);

        res.end();
    } else if (url === '/contact') {
        res.write(
            `<html>
                <head>
                    <title>
                        Testing application
                    </title>
                </head>
                <body>
                    <h3>This is contact page</h3>
                </body>
            </html>`
        );
        res.end();
    }
}


module.exports = routeLink;

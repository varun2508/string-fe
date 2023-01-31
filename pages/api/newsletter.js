export default async function handler(req, res) {
    const data = JSON.parse(req.body)
    let resp = await fetch(`${process.env.ActiveHostedApiUrl}/contacts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Api-Token': process.env.ActiveHostedApiKey,
        },
        body: JSON.stringify({
            "contact": {
                "email": data.email
            }

        }),
    })
    let json = await resp.json();

    res.status(resp.status).json(json)
}






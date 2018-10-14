if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
}

exports.node = function () {
    let ip = process.env.NODE_IP || "localhost"
    let port = process.env.NODE_PORT || "50760"
    let publicUrl = process.env.NODE_PUBLIC_URL || ip + ':' + port
    return {
        "ip": ip,
        "port": port,
        "url": ip + ':' + port,
        "publicUrl": publicUrl
    }
}
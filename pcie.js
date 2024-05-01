const fs = require('fs')

fs.readdirSync('/sys/bus/pci/devices').forEach(file => {
    fs.readFile(`/sys/bus/pci/devices/${file}/class`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`Device ${file} class: ${data}`)
    })
})
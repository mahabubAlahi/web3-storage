import { Web3Storage, getFilesFromPath, File } from 'web3.storage'

function getAccessToken() {

    return process.env.AccessToken;
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

//const fileInput = document.querySelector('input[type="file"]')
//return fileInput.files

async function storePdfs(files) {

    const client = makeStorageClient()
    const cid = await client.put(files)
    //console.log('stored files with cid:', cid)
    return cid
}

//storeFiles()

async function storeInfos(infos) {

    //const obj = { hello: 'world' }
    const obj = infos;
    const buffer = Buffer.from(JSON.stringify(obj))

    const files = [
        new File([buffer], 'oneshot.json')
    ]

    const client = makeStorageClient()
    const cid = await client.put(files)
    return cid
}

module.exports = {
    storePdfs,
    storeInfos
}
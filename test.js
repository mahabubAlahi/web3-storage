import { Web3Storage, getFilesFromPath, File } from 'web3.storage'

function getAccessToken () {

  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZhREVEMDZhZUVDQjEyNzkxNjMzODYyRkJCRjU5ZDVDQzg5NjI5MmQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTQxNTY2Mzk5OTEsIm5hbWUiOiJUZXN0aW5nIn0.R6FuyQtLG7uUlEmjAx6tBsMVoeEjDbnC-CH24ueijZ0';
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

async function storeFiles () {
    const files = []
    const pathFiles = await getFilesFromPath('/Users/mahabubalahi/Documents/Main/oneshot/ipfs/image-1.jpg')
    console.log(pathFiles)
    files.push(...pathFiles)
    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

  //storeFiles()

  async function storeFiles2 () {
    /*  console.log("hello")
    const fileInput = document.querySelector('input[type="file"]')
    const files = fileInput.files*/
    const obj = { hello: 'world' }
  const buffer = Buffer.from(JSON.stringify(obj))

  const files = [
    new File([buffer], 'hello.json')
  ]

    const client = makeStorageClient()
    const cid = await client.put(files)
    console.log('stored files with cid:', cid)
    return cid
  }

  //document.getElementById('store').addEventListener('click', storeFiles2);

  storeFiles2()
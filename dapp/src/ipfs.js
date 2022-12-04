// const IPFS = require('ipfs-api');
// const ipfs = new IPFS({host:'ipfs.infura.io',port:5001,protocol:'http'})

// export default ipfs;

// const {create} = require('ipfs-http-client');

// async function ipfsClient() {
//   const ipfs = await create(
//     {host:"ipfs.infura.io",
//     port:5001,
//     protocol:'https'}
//   );
//   return ipfs
// }

// async function saveText() {
//   let ipfs = await ipfsClient();
//   let result = await ipfs.add("hello");
//   console.log(result);
// }

// saveText();

const ipfsClient = require('ipfs-http-client');
const projectId = '2GsjNnx5atEVO6JuzO5pCNNR0zx';
    const projectSecret = '00b09e252b9c105247545cc9e96595dd';
    
    const auth =
        'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
    
    const client = ipfsClient.create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    });
    
    client.add('Hello World').then((res) => {
        console.log(res);
    });
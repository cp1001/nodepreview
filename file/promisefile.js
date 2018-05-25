const fs = require('fs');
const fsPromises = require('fs').promises;
// console.log(process);


/// fsPromises.open() 的flags参数，参考 https://nodejs.org/api/fs.html 的‘File System Flags’部分
/// r+ 读写，无文件报错。w+读写，无文件自动创建。a读，a+读和添加，无文件自动创建

var dir;
var fd;
let filePath = './tmp/test.txt';

async function test() {
    await testAddDIR().catch(console.error);
    await testDelDIR().catch(console.error);
    await testAddFile().catch(console.error);
    await testAppendFile().catch(console.error);
    await testReadFile().catch(console.error);
    await testStat().catch(console.error);
}
test();



/// 添加目录
async function testAddDIR() {
    dir = './tmp';
    try {
        fd = await fsPromises.mkdir(dir);
        console.log('testAddDIR:', dir, fd);// 成功创建无返回值
    } catch (err) {
        console.log(err);
    }

    dir = './tmp2';
    try {
        fd = await fsPromises.mkdir(dir);
        console.log('testAddDIR:', dir, fd);// 成功创建无返回值
    } catch (err) {
        console.log(err);
    }
}

/// 删除目录
async function testDelDIR() {
    let dir = './tmp2';
    fd = await fsPromises.rmdir(dir);
    console.log('testDelDIR:', dir, fd);
}

/// 添加文件
async function testAddFile() {
    fd = await fsPromises.open(filePath, 'w');
    let result = await fd.writeFile('AAAA');
    fd.close();
    console.log('testAddFile:', fd, result);
}

/// 向文件中追加内容
async function testAppendFile() {
    fd = await fsPromises.open(filePath, 'a+');
    let result = await fd.appendFile('CCCC', 'utf8');
    // fd.close();
    console.log('testAppendFile:', result);
}


/// 读文件内容
async function testReadFile() {
    let content;
    try {
        fd = await fsPromises.open(filePath, 'r+');
    } catch (err) {
        throw new Error(err);
    }
    content = await fsPromises.readFile(fd, { encoding: 'utf-8' });
    console.log('fsPromises.readFile:', content);
    content = await fsPromises.readFile(fd, 'utf8');
    console.log('fsPromises.readFile:', content);
    content = await fsPromises.readFile(fd);// buffer
    console.log('fsPromises.readFile:', content);
}


async function testStat() {
    try {
        dir = './tmp';
        var stat = await fsPromises.stat(dir);
    } catch (err) {
        throw new Error(err);
    }
    // console.log('testStat:', stat);
    console.log(stat.isDirectory(), stat.isFile());
}


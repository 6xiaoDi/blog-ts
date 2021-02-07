let data1: [string, number] = ['csdn', 100];
// ok
data1.push(100);
// ok
data1.push('100');
// error
data1.push(true);
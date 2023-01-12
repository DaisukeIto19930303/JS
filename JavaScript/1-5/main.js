function createJuice(fruits){
    console.log(fruits+'を受け取りました。ジュースにして返します');
    return fruits;
}
const i = createJuice('みかん');
console.log(i + 'ジュースが届きました');
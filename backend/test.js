function fun(){
  const obj = {
    books : [],
    totalCost : 0
  }
  arr = [1, 2, 3];
  arr.forEach(item => {
    obj.books.push("book")
    obj.totalCost += item;
  })
  console.log(obj);
}


fun();
function solution(sizes) {
  let arr = [0,0]
  sizes.forEach(el=>{
      let [b,s] = el.sort((a,b)=>b-a)
      if(b>arr[0]) arr[0] =b
      if(s>arr[1]) arr[1] =s
  })
  return arr[0]*arr[1]
}


// function solution(sizes) {
//     const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
//     return hor * ver;
// }